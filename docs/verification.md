# Verification record — October 18, 2026

## Website and accessibility

- Production shared library and Angular application builds pass. Angular remains on version 20, updated to its compatible 20.3 maintenance releases. Initial assets are approximately 337 kB raw / 90 kB estimated transfer.
- All 78 production browser checks pass in Chromium and WebKit at 360, 390, 768, and 1440 pixels, including layout overflow, logo loading, all section fragments, mobile navigation, Escape/focus behavior, package selection, inline validation, duplicate-submit protection, and provider failure recovery.
- All package CTAs select the intended offer, including repeat selection after a manual change and restarting after a successful inquiry.
- `/privacy` direct load/refresh, page metadata/canonicals, and restoration after returning home are tested.
- Axe WCAG A/AA checks cover all four viewport widths. Separate touch-navigation checks cover the menu and section links, reduced transparency/motion, and the privacy page.
- Native Safari application review passed at 100% and an explicitly selected 200% page zoom: hero/header logo, package selection, inquiry fields, keyboard Tab focus, and footer logo/layout. Zoom was restored after review. Automated tests also cover 200% text reflow and increased contrast.
- A low-contrast illustration label and a missing FAQ heading word separator on narrow layouts were corrected during review. An unsourced founder quotation was restyled as unquoted brand copy.
- Removed unused marketing login/theme dependencies and source files. The shared Angular UI library is retained. Frontend and infrastructure dependency audits report zero vulnerabilities.
- Published assets exclude legacy images, archived HTML/captures, original design SVG, EPS artwork, and old favicon. The supplied SVG is preserved in source; cropped wordmarks use outlined lettering.

## AWS inquiry service

- CDK TypeScript compilation, strict synthesis, reviewed deployment diff, and 25 handler/infrastructure tests pass.
- New `JarVonDigitalInquiry` and `JarVonDigitalInquiryAssets` stacks are deployed in the existing AWS account in `us-east-1`. The artifact bucket is private, encrypted, versioned, TLS-only, and retained. Existing Amplify hosting and website DNS records are preserved.
- API Gateway HTTP API invokes the on-demand Lambda handler. The deployed endpoint is in `hub/public/site-config.json`. No AWS credentials are present in frontend assets.
- Handler checks origin, content type, JSON/body size, required fields, email/header safety, offer and budget allowlists, public URL schemes, and honeypot. The notification is plain text and goes only to the configured business inbox. There is no visitor auto-reply.
- SES domain verification, DKIM, custom mail-from, and destination verification are successful. The account remains in sandbox mode with the intended verified recipient.
- The first live test exposed a destination-identity IAM requirement. The deployed role now grants only the required domain/destination identities, constrained by the exact From and recipient addresses. Source action analysis is retained in `infrastructure/generated/inquiry-policy-analysis.json`.
- A subsequent real submission returned `ok:true`, request ID `Fca_6jSfoAMEYqA=`. The owner confirmed delivery to `jarvondigital@gmail.com` of the message containing `JVD-AWS-20261018-LAUNCH` before publication. Reply-To is the validated email field in the tested SDK input.
- Recoverable provider failures and no-success-before-acceptance are tested. API stage throttling and reserved concurrency limit traffic. CORS/honeypot are not authentication; non-browser clients can spoof origins. Manual retries after an uncertain timeout can produce duplicate notifications.
- Lambda logs retain only request/message identifiers, error codes and redacted authorization diagnostics for 30 days. Delivery failure/invocation error alarms are configured; no external alarm subscription was created. No persistent CloudTrail trail was found; standard account event history provides the available management-event audit trail.
- Artifact CloudFormation template passed `cfn-lint` and AWS template validation. No separate cfn-guard compliance run was performed; these checks are not a compliance certification.
- The existing Amplify build specification now builds the shared UI library and publishes `dist/hub/browser`. AWS endpoint and required-config variables were set while preserving existing variables.

## Operating plan

The 60-day plan, personal outreach drafts, weekly review, and private log are prepared in the ignored local `private/` folder, outside the public repository and published website. No prospect outreach has been sent, no payment collected, and no client agreement modified. The revenue target remains a business operating goal, not a verified result or website promise. Use actual collections and delivery hours in the owner's private log as work proceeds.

## Publication

- PR #1 was merged to the production branch; Amplify job 20 completed BUILD, DEPLOY, and VERIFY successfully for commit `77c0d345435c93aabfe8491c66170f2834a67b03`.
- `https://jarvon.digital/` serves the redesigned site. The live browser suite passes all 78 checks plus the separate accessibility/touch checks.
- The initial live HTTP check found that `/privacy` rendered the application while returning 404. Explicit 200 rewrites for `/privacy` and `/privacy/` corrected this; the suite now asserts the direct-request status as well as visible content. Rewrite configuration is saved in `infrastructure/amplify-rewrites.json`.
- All three alternate hosts return 301 redirects to the matching path on `https://jarvon.digital`; canonical-domain and `/privacy` redirects were checked directly.
- Homepage, direct privacy route, site config, sitemap, robots, all three SVG brand variants, Apple icon, and social preview return HTTP 200 with their expected content types. Original design SVG and retired image/EPS paths no longer return those assets.
- The AWS test inquiry reached the intended inbox before production publication, as confirmed by the owner. An extra manual browser form check was interrupted by a Chrome extension before submission; it was not used as evidence of delivery. The automated production browser suite uses mocked service responses; real service delivery is established by the live API request and owner inbox confirmation above.
