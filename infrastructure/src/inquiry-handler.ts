import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";

const ses = new SESv2Client({ region: process.env.AWS_REGION, maxAttempts: 1 });
const offers: Record<string, string> = {
  "business-website": "Business Website",
  "website-improvements": "Website Improvements",
  "website-care": "Website Care",
};
const budgets = new Set([
  "$150/month — care",
  "$750–$2,249",
  "$2,250–$3,499",
  "$3,500–$5,000",
  "$5,000+",
  "I’d like guidance",
]);
const limits: Record<string, number> = {
  name: 100,
  email: 254,
  business: 150,
  description: 4000,
  website: 500,
  offer: 50,
  budget: 50,
  contactFax: 200,
  recaptchaToken: 4096,
};
type CaptchaResult = { success?: boolean; hostname?: string };
async function verifyCaptcha(token: string, secret: string): Promise<CaptchaResult> {
  const body = new URLSearchParams({ secret, response: token });
  const result = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(4000),
  });
  if (!result.ok) throw new Error("captcha-provider");
  return (await result.json()) as CaptchaResult;
}
const response = (
  statusCode: number,
  body: object,
): APIGatewayProxyStructuredResultV2 => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  },
  body: JSON.stringify(body),
});
export type Sender = (
  input: ConstructorParameters<typeof SendEmailCommand>[0],
) => Promise<{ MessageId?: string }>;
export function createHandler(
  send: Sender,
  config: {
    from: string;
    recipient: string;
    origins: string[];
    recaptchaSecret: string;
    verifyCaptcha?: typeof verifyCaptcha;
  },
) {
  return async (
    event: APIGatewayProxyEventV2,
  ): Promise<APIGatewayProxyStructuredResultV2> => {
    if (event.requestContext.http.method !== "POST")
      return response(405, { ok: false, error: "method" });
    const headers = Object.fromEntries(
      Object.entries(event.headers ?? {}).map(([key, value]) => [
        key.toLowerCase(),
        value,
      ]),
    );
    if (!config.origins.includes(headers["origin"] ?? ""))
      return response(403, { ok: false, error: "origin" });
    if (!headers["content-type"]?.toLowerCase().startsWith("application/json"))
      return response(415, { ok: false, error: "content-type" });
    if (!config.from || !config.recipient || !config.recaptchaSecret)
      return response(503, { ok: false, error: "unavailable" });
    let payload: unknown;
    try {
      const body = Buffer.from(
        event.body ?? "",
        event.isBase64Encoded ? "base64" : "utf8",
      );
      if (body.length > 32768)
        return response(413, { ok: false, error: "size" });
      payload = JSON.parse(body.toString("utf8"));
    } catch {
      return response(400, { ok: false, error: "json" });
    }
    if (!payload || typeof payload !== "object" || Array.isArray(payload))
      return response(400, { ok: false, error: "fields" });
    const values = payload as Record<string, unknown>;
    const fields: Record<string, string> = {};
    for (const [key, max] of Object.entries(limits)) {
      const value = values[key] ?? "";
      if (typeof value !== "string" || value.length > max)
        return response(422, { ok: false, error: "fields" });
      fields[key] = value.trim();
    }
    if (Object.keys(values).some((key) => !(key in limits)))
      return response(422, { ok: false, error: "fields" });
    const {
      name,
      email,
      business,
      description,
      offer,
      budget,
      website,
      contactFax,
      recaptchaToken,
    } = fields;
    if (
      contactFax ||
      !recaptchaToken ||
      !name ||
      !business ||
      !description ||
      !offers[offer] ||
      !budgets.has(budget)
    )
      return response(422, { ok: false, error: "fields" });
    if (
      !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/.test(
        email,
      ) ||
      /[\r\n\0]/.test(email + name + business)
    )
      return response(422, { ok: false, error: "fields" });
    if (website) {
      try {
        const url = new URL(website);
        if (
          !["http:", "https:"].includes(url.protocol) ||
          !url.hostname.includes(".") ||
          url.username ||
          url.password
        )
          return response(422, { ok: false, error: "website" });
      } catch {
        return response(422, { ok: false, error: "website" });
      }
    }
    try {
      const verified = await (config.verifyCaptcha ?? verifyCaptcha)(
        recaptchaToken,
        config.recaptchaSecret,
      );
      const expectedHostname = new URL(headers["origin"]!).hostname;
      if (verified.success !== true || verified.hostname !== expectedHostname)
        return response(403, { ok: false, error: "captcha" });
    } catch {
      return response(503, { ok: false, error: "captcha-unavailable" });
    }
    try {
      const sent = await send({
        FromEmailAddress: config.from,
        Destination: { ToAddresses: [config.recipient] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: {
              Data: `JarVonDigital inquiry: ${offers[offer]}`,
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: [
                  `Name: ${name}`,
                  `Email: ${email}`,
                  `Business: ${business}`,
                  `Service: ${offers[offer]}`,
                  `Budget: ${budget}`,
                  `Website: ${website || "Not provided"}`,
                  "",
                  "Project description:",
                  description,
                  "",
                  `Request ID: ${event.requestContext.requestId}`,
                ].join("\n"),
                Charset: "UTF-8",
              },
            },
          },
        },
      });
      if (!sent.MessageId)
        return response(503, { ok: false, error: "unavailable" });
      // Deliberately exclude inquiry content, email addresses and IP addresses from logs.
      console.info(
        JSON.stringify({
          event: "inquiry.accepted",
          requestId: event.requestContext.requestId,
          messageId: sent.MessageId,
        }),
      );
      return response(200, {
        ok: true,
        requestId: event.requestContext.requestId,
      });
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "inquiry.failed",
          requestId: event.requestContext.requestId,
          code: error instanceof Error ? error.name : "UnknownError",
          authorization:
            error instanceof Error && error.name === "AccessDeniedException"
              ? error.message.replace(/[^\s<>]+@[^\s<>]+/g, "[email]")
              : undefined,
        }),
      );
      return response(503, { ok: false, error: "unavailable" });
    }
  };
}
export const handler = createHandler(
  (input) => ses.send(new SendEmailCommand(input)),
  {
    from: process.env.SENDER_EMAIL ?? "",
    recipient: process.env.RECIPIENT_EMAIL ?? "",
    origins: (process.env.ALLOWED_ORIGINS ?? "").split(",").filter(Boolean),
    recaptchaSecret: process.env.RECAPTCHA_SECRET_KEY ?? "",
  },
);
