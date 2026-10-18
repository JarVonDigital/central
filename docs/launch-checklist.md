# Launch checklist

The inquiry provider is AWS, replacing the original Formspree requirement at the owner's request.

## AWS inquiry service

- [x] Retain the existing Amplify app and hosting.
- [x] Deploy the separate API Gateway HTTP API, Lambda, SES grants, logs, metrics, and alarms through CDK.
- [x] Verify `jarvon.digital` and publish the missing DKIM, verification, and custom mail-from DNS records. DKIM and mail-from are both successful.
- [x] Verify `jarvondigital@gmail.com` as the destination identity. The account remains in SES sandbox mode; the fixed verified-recipient workflow does not require sending to unverified visitors.
- [x] Configure `INQUIRY_ENDPOINT` and `REQUIRE_INQUIRY_CONFIG=true` on the existing Amplify app. Existing environment variables were preserved.
- [x] Send a clearly labeled test inquiry through the live endpoint. The owner confirmed receipt in `jarvondigital@gmail.com`, reference `JVD-AWS-20261018-LAUNCH`, on October 18, 2026. The handler sends all required fields and uses the validated visitor email as Reply-To.
- [x] Verify missing configuration, provider rejection, pending request, duplicate-submit protection, and failure/retry behavior in tests. No visitor auto-replies are sent.

## Hosting and indexing

- [x] Existing hosting has a SPA `404-200` rewrite to `/index.html`.
- [x] Confirm production domain configuration for `jarvon.digital` and `jarvondigital.com` on the existing app.
- [ ] Publish and check the redesigned application, direct `/privacy` load, HTTPS, config, social preview, favicon, robots, and sitemap on the production domain.
- [x] Exclude archived HTML/captures, unused large images, EPS artwork, the original design SVG, and old favicon from published assets. Preserve the original SVG in source.

## Product and operating plan

- [x] Founder copy uses résumé employment experience and distinguishes it from JarVonDigital client work. Personal résumé phone/email are absent.
- [x] Contractor and cleaner examples are clearly labeled concepts, without invented client results or testimonials.
- [x] Public prices, scope, payment milestones, two revisions, care boundaries, timeline, and 14-day defect correction are implemented. Existing-client agreements are unchanged.
- [x] Review 360, 390, 768, and 1440px layouts, keyboard focus, touch navigation, increased contrast, reduced motion, and reduced transparency.
- [x] Review actual Safari logo rendering and 200% browser zoom. Automated WebKit and Chromium cover all four viewport widths.
- [x] Prepare private sales plan, outreach drafts, weekly review, and blank private log. Completed prospect records belong outside Git and published assets.
