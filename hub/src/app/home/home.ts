import { Component, inject, viewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Pricing } from '@jde/ui';
import { HomeHero } from '../home-hero/home-hero';
import { Quote } from '../quote/quote';
import { OFFERS } from '../offers';
@Component({
  selector: 'app-home',
  imports: [Pricing, Quote, HomeHero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  offers = OFFERS;
  private quote = viewChild(Quote);
  private document = inject(DOCUMENT);
  constructor() {
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Thoughtful websites for local service businesses. Based in Lakeland, serving nationwide. Business websites from $2,250, improvements from $750, and care at $150/month.',
    });
    inject(Meta).updateTag({
      property: 'og:url',
      content: 'https://jarvon.digital/',
    });
    inject(Meta).updateTag({
      property: 'og:title',
      content: 'Websites for local service businesses | JarVonDigital',
    });
    inject(Meta).updateTag({
      property: 'og:description',
      content:
        'Clear scope. Thoughtful design. A simple connection. Business websites from $2,250.',
    });
    this.document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', 'https://jarvon.digital/');
  }
  chooseOffer(id: string) {
    this.quote()?.selectOffer(id);
    setTimeout(() =>
      this.document.getElementById('offer')?.focus({ preventScroll: true }),
    );
  }
  faqs = [
    {
      q: 'What do I need before we start?',
      a: 'Your logo, service details, photos you have permission to use, and access to your domain and existing website. We’ll agree on a content checklist before the project starts. Light copy editing is included; substantial copywriting is quoted separately.',
    },
    {
      q: 'How long does a website take?',
      a: 'The target is three weeks after all required content and access are received. I take on one website build at a time and confirm your start date in the written quote.',
    },
    {
      q: 'How do payment and revisions work?',
      a: 'Website projects are paid 50% before work starts and 50% before launch. A Business Website includes two revision rounds within the agreed scope and a 14-day defect correction period after delivery.',
    },
    {
      q: 'What if I need more than five pages?',
      a: 'Additional pages, custom integrations, ecommerce, and substantial copywriting are quoted separately. You’ll receive a written scope and price before any additional work begins.',
    },
    {
      q: 'What does Website Care cover?',
      a: 'Routine maintenance and up to 30 minutes of minor content updates each month. Allowances expire monthly; extra work is quoted separately. I respond within two business days. Care is scheduled support, with no continuous emergency coverage.',
    },
    {
      q: 'Do you work outside Lakeland?',
      a: 'Yes. JarVonDigital is based in Lakeland, Florida and works remotely with businesses across the United States. We can plan your project by email and scheduled calls.',
    },
    {
      q: 'Does this change an existing client agreement?',
      a: 'No. Existing client agreements remain in place. These packages describe new engagements; any change to an existing agreement would be discussed and agreed separately.',
    },
  ];
}
