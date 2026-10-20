# JarVonDigital marketing site

Angular 20 with the shared `@jde/ui` library, hosted on the existing Amplify setup.

```sh
npm ci
npm run build:jde
npm run build
npm start
```

Offer definitions live in `src/app/offers.ts`; the shared pricing component renders structured prices, billing periods, scope, and CTAs. Routes are `/` and `/privacy`; navigation uses homepage section fragments.

## Inquiry configuration

The application reads `/site-config.json` for the public reCAPTCHA v2 checkbox site key and inquiry endpoint. `npm run build` first runs `scripts/configure-site.mjs`, which takes `INQUIRY_ENDPOINT` and `RECAPTCHA_SITE_KEY` from the environment or the config file. The endpoint must match `https://API_ID.execute-api.us-east-1.amazonaws.com/inquiries`. Set `REQUIRE_INQUIRY_CONFIG=true` for launch builds; both values are required. Empty reCAPTCHA configuration supports local preview but blocks form submission. Only the public site key belongs in the browser; the secret key is held by the Lambda deployment.

The form validates on blur/submit, requires a completed reCAPTCHA check, prevents duplicate in-flight submits, preserves fields on errors, times out after 20 seconds, and reports success only after the AWS endpoint confirms SES acceptance. The site never stores inquiry details in browser storage. Verify actual inbox receipt before launch.

## Assets and operations

`public/Document.svg` is preserved as supplied. Header/footer variants crop its original geometry and outline Helvetica Bold letters to avoid font substitution. The monogram is derived directly from the supplied paths. Angular excludes the original design file, archived web captures, and unused artwork from publication.

See the [launch checklist](../docs/launch-checklist.md). Operational planning files and sales records are kept in the ignored local `private/` folder; they are not part of this public repository or the published website.

## Verification

```sh
npx playwright install chromium webkit
npm start -- --configuration production --host 127.0.0.1 --port 4319
# In a separate terminal:
TEST_BASE_URL=http://127.0.0.1:4319 npm run test:site
TEST_BASE_URL=http://127.0.0.1:4319 npm run test:accessibility
```

The browser suite uses mocked AWS inquiry responses and never sends mail. Review screenshots are saved under ignored `tmp/review/`. See [verification record](../docs/verification.md) for checked behavior and remaining live checks. `scripts/derive-brand.py` preserves the vector asset derivation; it requires `fonttools` and macOS Helvetica, and is not required to build or deploy the site.

AWS infrastructure and handler tests are in [infrastructure](../infrastructure/README.md).

The inactive marketing login and old theme packages have been removed. Angular 20 maintenance updates and the locked dependency set currently pass `npm audit` with zero reported vulnerabilities. `npm test` runs the browser and accessibility suites against the configured preview server.
