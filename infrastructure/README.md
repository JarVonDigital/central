# AWS inquiry delivery

The Angular website stays on its existing Amplify app. A separate CDK stack adds API Gateway HTTP API → on-demand Lambda → SES. This synchronous handler has no HTTP server or background workflow. HTTP API provides native CORS and a small stage throttle without the extra features of REST API.

The endpoint accepts `POST /inquiries`. It checks the origin, JSON body size, required fields, offer and budget allowlists, URL schemes, email headers, and a hidden honeypot. It sends a plain-text notification only to `jarvondigital@gmail.com` from the verified `website@jarvon.digital` identity. The visitor email is used only as Reply-To; no visitor autoresponder is sent. This allows the closed-recipient workflow to operate in the SES sandbox after destination verification.

Success is returned only after SES supplies a message identifier. SES acceptance does not establish inbox receipt; verify a real test message separately. Transient failures return a recoverable error. The browser retains the form and prevents duplicate in-flight sends. An uncertain network timeout may have already been accepted by SES; a manual retry can create a duplicate notification.

## Deployment

```sh
npm ci
npm test
npm run build
npm run synth
npm run diff
npm run deploy
```

The existing AWS account and `us-east-1` environment were discovered through authenticated CLI calls. This project targets that existing site; it is not a generic multi-tenant deployment template. `src/inquiry-stack.ts` imports the existing Route 53 zone and SES domain, and adds only missing email authentication/verification records. Existing A/NS/SOA/WWW records are preserved.

`assets-stack.json` provisions a private, versioned, encrypted, TLS-only artifact bucket with retention. The CDK CLI credential synthesizer uses this bucket without adding account-wide deployment roles. New application IAM grants SES SendEmail on the domain and verified destination identities, constrained to the intended sender and recipient, plus writes to the dedicated log group. The destination identity grant is required by the SES sandbox authorization path. API Gateway invocation is scoped to this API route. No AWS keys enter frontend assets.

The application stack and artifact stack have termination protection. Review diffs before updating. Retained logs/artifacts survive deletion; no automated destroy or purge is provided.

## Configuration and limits

- Write the output `InquiryEndpoint` into `hub/public/site-config.json` as `inquiryEndpoint`, or set `INQUIRY_ENDPOINT` in the Amplify build environment.
- Set `REQUIRE_INQUIRY_CONFIG=true` for release builds.
- Allowed origins are the production domains and existing Amplify `main` domain. Add an explicit preview origin before testing from a new branch; local browser tests mock the network.
- The API has a best-effort global throttle of 0.2 requests/second and burst 2, with Lambda reserved concurrency 2. CORS and the honeypot reduce accidental cross-site use and simple spam; they are not authentication and can be spoofed by non-browser clients.
- SES remains subject to account sandbox quotas. Keep this endpoint for a single verified destination; production access is needed before expanding to unverified recipients.
- Logs retain request/message identifiers and error types for 30 days, with no inquiry body, visitor email or IP deliberately logged. CloudWatch provides delivery-failure and invocation-error alarms; no external notification subscription is created.
- AWS charges are usage based. Replace the brief's Formspree allowance with measured AWS usage in the private weekly review. The existing $150/month planning overhead is unchanged until actual costs are recorded.

## IAM analysis

The SDK action analysis was generated with:

```sh
DISABLE_IAM_POLICY_AUTOPILOT_TELEMETRY=true uvx iam-policy-autopilot@latest generate-policies /absolute/path/to/infrastructure/src/inquiry-handler.ts --region us-east-1 --account 667924052526 --service-hints sesv2 --pretty
```

`generated/inquiry-policy-analysis.json` records the baseline actions. CDK's identity grant narrows the deployed policy to the actual domain identity; the broader generated resource suggestions are not attached to the role.

## Existing Amplify routing

`amplify-rewrites.json` records the production app's canonical-domain redirects and privacy HTTP 200 rewrites. Apply it to the existing app with:

```sh
aws amplify update-app --app-id d36ica479ygfuy --custom-rules file://amplify-rewrites.json --region us-east-1
```

The explicit privacy rules prevent an application-rendered page from retaining a 404 HTTP status. The existing fallback is retained after those rules. Verify both response status and rendered route after propagation.
