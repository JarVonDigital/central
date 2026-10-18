import { writeFileSync, readFileSync } from "node:fs";
const endpoint =
  process.env.INQUIRY_ENDPOINT ??
  JSON.parse(readFileSync("public/site-config.json", "utf8")).inquiryEndpoint;
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
writeFileSync(
  "public/site-config.json",
  JSON.stringify({ inquiryEndpoint: endpoint ?? "" }, null, 2) + "\n",
);
