import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  template: `<main id="main" tabindex="-1" class="container section privacy">
    <a routerLink="/" fragment="inquiry">← Back to your inquiry</a>
    <p class="eyebrow">Your information</p>
    <h1>Inquiry privacy.</h1>
    <p>Last updated October 20, 2026</p>
    <h2>What you share</h2>
    <p>
      When you request a quote, JarVonDigital LLC receives your name, email
      address, business name, selected service, budget range, project
      description, and any website URL you choose to include. Please do not
      include passwords, payment details, or sensitive personal information.
    </p>
    <h2>How inquiries are processed</h2>
    <p>
      We use these details to respond to your inquiry, clarify your project, and
      prepare a quote. Our inquiry form uses Amazon Web Services (API Gateway,
      Lambda, and Simple Email Service) to process submissions and deliver them
      to jarvondigital&#64;gmail.com. AWS and our email provider process these
      details to provide their services. The inquiry service validates input and
      limits request traffic to reduce abuse.
      <a
        href="https://aws.amazon.com/privacy/"
        target="_blank"
        rel="noopener noreferrer"
        >Read AWS’s privacy notice (opens in a new tab)</a
      >.
    </p>
    <p>
      The inquiry form uses Google reCAPTCHA to check for automated submissions.
      Google processes the verification and may receive technical information
      such as your IP address and browser details, and may use cookies. See
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy (opens in a new tab)</a>
      and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">terms (opens in a new tab)</a>.
    </p>
    <h2>Storage and sharing</h2>
    <p>
      Inquiry details may be kept in our inbox and private business records for
      project follow-up and administration. We review and remove information
      when it is no longer needed, subject to records we need to retain for
      business or legal obligations. We do not sell inquiry details or use them
      to add you to a marketing list.
    </p>
    <h2>Site technology</h2>
    <p>
      This site does not use advertising trackers or analytics cookies. Our
      hosting and form providers may process technical information, such as an
      IP address, to deliver and protect their services.
    </p>
    <h2>Questions or removal requests</h2>
    <p>
      Email
      <a href="mailto:jarvondigital@gmail.com">jarvondigital&#64;gmail.com</a>
      to ask about your inquiry information or request its correction or
      removal.
    </p>
  </main>`,
  styles: [
    `
      .privacy {
        max-width: 48rem;
      }
      .privacy h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin: 1rem 0;
      }
      .privacy .eyebrow {
        margin-top: 3rem;
      }
      .privacy h2 {
        font-size: 1.4rem;
        margin-top: 2.5rem;
        letter-spacing: -0.025em;
      }
      .privacy p {
        color: var(--muted);
      }
    `,
  ],
})
export class Privacy {
  constructor() {
    inject(DOCUMENT)
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', 'https://jarvon.digital/privacy');
    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content:
        'How JarVonDigital processes website inquiries, contact information, and project details.',
    });
    meta.updateTag({
      property: 'og:title',
      content: 'Inquiry privacy | JarVonDigital',
    });
    meta.updateTag({
      property: 'og:description',
      content: 'How JarVonDigital processes your inquiry information.',
    });
    meta.updateTag({
      property: 'og:url',
      content: 'https://jarvon.digital/privacy',
    });
  }
}
