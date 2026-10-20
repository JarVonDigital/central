import assert from "node:assert/strict";
import { test } from "node:test";
import { createHandler } from "../src/inquiry-handler.js";
import type { APIGatewayProxyEventV2 } from "aws-lambda";
const valid = {
  name: "Test Owner",
  email: "owner@example.com",
  business: "Test Business",
  offer: "business-website",
  budget: "$2,250–$3,499",
  website: "",
  description: "Please help with a business website.",
  contactFax: "",
  recaptchaToken: "test-captcha-token",
};
const config = {
  from: "website@jarvon.digital",
  recipient: "jarvondigital@gmail.com",
  origins: ["https://jarvon.digital"],
  recaptchaSecret: "test-secret",
  verifyCaptcha: async (token: string, secret: string) => {
    assert.equal(token, "test-captcha-token");
    assert.equal(secret, "test-secret");
    return { success: true, hostname: "jarvon.digital" };
  },
};
function event(
  data: unknown = valid,
  overrides: Partial<APIGatewayProxyEventV2> = {},
): APIGatewayProxyEventV2 {
  return {
    body: JSON.stringify(data),
    isBase64Encoded: false,
    headers: {
      origin: "https://jarvon.digital",
      "content-type": "application/json",
    },
    requestContext: { requestId: "test-request", http: { method: "POST" } },
    ...overrides,
  } as APIGatewayProxyEventV2;
}
test("sends a plain-text notification only to the configured inbox, with a validated reply-to", async () => {
  let calls = 0;
  const handler = createHandler(async (input) => {
    calls++;
    assert.deepEqual(input.Destination, {
      ToAddresses: ["jarvondigital@gmail.com"],
    });
    assert.deepEqual(input.ReplyToAddresses, ["owner@example.com"]);
    assert.equal(input.FromEmailAddress, "website@jarvon.digital");
    assert.match(input.Content!.Simple!.Body!.Text!.Data!, /Test Business/);
    assert.doesNotMatch(input.Content!.Simple!.Body!.Text!.Data!, /test-captcha-token/);
    assert.equal(input.Content!.Simple!.Body!.Html, undefined);
    return { MessageId: "test-message" };
  }, config);
  const result = await handler(event());
  assert.equal(result.statusCode, 200);
  assert.equal(JSON.parse(result.body!).ok, true);
  assert.equal(calls, 1);
});
test("does not resolve success while SES is pending", async () => {
  let release!: () => void;
  const handler = createHandler(async () => {
    await new Promise<void>((r) => {
      release = r;
    });
    return { MessageId: "accepted" };
  }, config);
  let resolved = false;
  const request = handler(event()).then((r) => {
    resolved = true;
    return r;
  });
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(resolved, false);
  release();
  assert.equal((await request).statusCode, 200);
});
for (const [name, patch] of Object.entries({
  "blank name": { name: " " },
  "email header injection": {
    email: "owner@example.com\r\nBcc:other@example.com",
  },
  "invalid email": { email: "bad" },
  "unknown offer": { offer: "unlimited-it" },
  "unknown budget": { budget: "free" },
  "blank project": { description: " " },
  "oversized name": { name: "x".repeat(101) },
  "script URL": { website: "javascript:alert(1)" },
  "URL credentials": { website: "https://user:password@example.com" },
  honeypot: { contactFax: "spam" },
  "unexpected recipient": { recipient: "other@example.com" },
  "object input": { name: { value: "Test" } },
  "missing captcha token": { recaptchaToken: "" },
  "oversized captcha token": { recaptchaToken: "x".repeat(4097) },
})) {
  test(`rejects ${name} without calling SES`, async () => {
    const handler = createHandler(async () => {
      throw new Error("Must not send");
    }, config);
    assert.equal(
      (await handler(event({ ...valid, ...patch }))).statusCode,
      422,
    );
  });
}
for (const [name, overrides, status] of [
  ["missing origin", { headers: { "content-type": "application/json" } }, 403],
  [
    "wrong origin",
    {
      headers: {
        origin: "https://evil.example",
        "content-type": "application/json",
      },
    },
    403,
  ],
  [
    "wrong content type",
    {
      headers: {
        origin: "https://jarvon.digital",
        "content-type": "text/plain",
      },
    },
    415,
  ],
  ["malformed JSON", { body: "{" }, 400],
  ["too much data", { body: "x".repeat(32769) }, 413],
] as const) {
  test(`rejects ${name}`, async () => {
    let called = false;
    const handler = createHandler(async () => {
      called = true;
      return { MessageId: "bad" };
    }, config);
    assert.equal((await handler(event(valid, overrides))).statusCode, status);
    assert.equal(called, false);
  });
}
test("accepts the gateway base64 body", async () => {
  const handler = createHandler(
    async () => ({ MessageId: "accepted" }),
    config,
  );
  assert.equal(
    (
      await handler(
        event(valid, {
          body: Buffer.from(JSON.stringify(valid)).toString("base64"),
          isBase64Encoded: true,
        }),
      )
    ).statusCode,
    200,
  );
});
test("normalizes header casing and permits JSON charset", async () => {
  const handler = createHandler(
    async () => ({ MessageId: "accepted" }),
    config,
  );
  assert.equal(
    (
      await handler(
        event(valid, {
          headers: {
            Origin: "https://jarvon.digital",
            "Content-Type": "application/json; charset=utf-8",
          },
        }),
      )
    ).statusCode,
    200,
  );
});
test("provider rejection is recoverable and never success", async () => {
  const handler = createHandler(async () => {
    throw new Error("rejected");
  }, config);
  const result = await handler(event());
  assert.equal(result.statusCode, 503);
  assert.equal(JSON.parse(result.body!).ok, false);
});
test("rejects failed or mismatched reCAPTCHA verification before SES", async () => {
  for (const verification of [
    { success: false, hostname: "jarvon.digital" },
    { success: true, hostname: "evil.example" },
  ]) {
    const handler = createHandler(async () => {
      throw new Error("Must not send");
    }, { ...config, verifyCaptcha: async () => verification });
    assert.equal((await handler(event())).statusCode, 403);
  }
});
test("reCAPTCHA service errors fail closed before SES", async () => {
  const handler = createHandler(async () => {
    throw new Error("Must not send");
  }, { ...config, verifyCaptcha: async () => { throw new Error("offline"); } });
  assert.equal((await handler(event())).statusCode, 503);
});
test("missing reCAPTCHA secret fails closed before SES", async () => {
  const handler = createHandler(async () => {
    throw new Error("Must not send");
  }, { ...config, recaptchaSecret: "" });
  assert.equal((await handler(event())).statusCode, 503);
});
test("missing provider acceptance identifier is never success", async () => {
  const handler = createHandler(async () => ({}), config);
  assert.equal((await handler(event())).statusCode, 503);
});
test("all three offers can be submitted", async () => {
  const handler = createHandler(
    async () => ({ MessageId: "accepted" }),
    config,
  );
  for (const offer of [
    "business-website",
    "website-improvements",
    "website-care",
  ])
    assert.equal((await handler(event({ ...valid, offer }))).statusCode, 200);
});
