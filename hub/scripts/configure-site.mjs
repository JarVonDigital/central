import { writeFileSync, readFileSync } from "node:fs";
const existing = JSON.parse(readFileSync("public/site-config.json", "utf8"));
const endpoint =
  process.env.INQUIRY_ENDPOINT ??
  existing.inquiryEndpoint;
const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY ?? existing.recaptchaSiteKey ?? "";
if (recaptchaSiteKey && !/^[A-Za-z0-9_-]{10,}$/.test(recaptchaSiteKey))
  throw new Error("RECAPTCHA_SITE_KEY must be a reCAPTCHA v2 checkbox site key.");
if (
  endpoint &&
  !/^https:\/\/[a-z0-9]+\.execute-api\.[a-z0-9-]+\.amazonaws\.com\/inquiries$/.test(
    endpoint,
  )
)
  throw new Error(
    "INQUIRY_ENDPOINT must be the HTTPS API Gateway /inquiries URL.",
  );
if (!endpoint) {
  if (process.env.REQUIRE_INQUIRY_CONFIG === "true")
    throw new Error("Launch blocked: configure a verified INQUIRY_ENDPOINT.");
  console.warn(
    "AWS inquiry endpoint is not configured. Email fallback works; live delivery remains a launch dependency.",
  );
}
if (!recaptchaSiteKey && process.env.REQUIRE_INQUIRY_CONFIG === "true")
  throw new Error("Launch blocked: configure RECAPTCHA_SITE_KEY.");
writeFileSync(
  "public/site-config.json",
  JSON.stringify({ inquiryEndpoint: endpoint ?? "", recaptchaSiteKey }, null, 2) + "\n",
);
