import {Component} from '@angular/core';
import {Card} from 'primeng/card';
import {NavBar, Pricing, PricingStruct} from '@jde/ui';

@Component({
  selector: 'app-root',
  imports: [Card, Pricing, Pricing, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  services = [
    {
      bgImage: 'animated-typing.jpg',
      mission: 'Custom Web Design',
      statement: 'We create professional, mobile-friendly websites designed to showcase your brand and attract your ideal customers. Every site is built with user experience, speed, and SEO best practices in mind. From concept to launch, we ensure your website looks great and performs even better.'
    },
    {
      bgImage: 'animated-revenue.jpg',
      mission: 'Boost Visibility & Revenue',
      statement: 'Our proven strategies help your business rank higher on search engines, reach more customers, and increase conversions. We combine targeted SEO, engaging content, and digital marketing to grow your brand awareness. The result is a stronger online presence that drives real profit growth.'
    },
    {
      bgImage: 'animated-solutions.jpg',
      mission: 'Smart Software Solutions',
      statement: 'We identify, customize, and integrate software that makes your business run more efficiently. By choosing tools that fit your unique workflow, we help you save time and reduce costs. Our goal is to ensure your technology works for you, not the other way around.'
    },
    {
      bgImage: 'animated-help.jpg',
      mission: 'Reliable Ongoing Support',
      statement: 'We provide continuous website maintenance, updates, and troubleshooting to keep your business running smoothly. Whether you need quick fixes or long-term digital guidance, we’re here to help. You can count on us as your trusted partner for dependable online support.'
    },
  ];

  /**
   * Represents an array of pricing plans for a service, where each item defines
   * details about a specific tier of the pricing model, along with its features and characteristics.
   *
   * @typedef {Object} PricingStruct
   * @property {string} icon - The icon identifier associated with the pricing block.
   * @property {boolean} [isRecommended] - Indicates if the pricing tier is recommended (optional).
   * @property {string} blockTitle - The title of the pricing block, including the tier name and price.
   * @property {string} blockDescription - A short description or summary of the pricing tier.
   * @property {string[]} blockOptions - A list of features or services included in the pricing tier.
   *
   * @type {PricingStruct[]}
   */
  pricingBlocks: PricingStruct[] = [
    {
      id: 'Basic IT',
      icon: 'pi pi-plus',
      blockTitle: 'Basic IT – $250/mo',
      blockDescription: 'Perfect for businesses that need occasional help.',
      blockOptions: [
        'Up to 4 hours of support per month',
        '48-hour guaranteed response time',
        'Website content updates & minor fixes',
        'Basic SaaS troubleshooting',
        'Email & chat support during business hours',
      ],
      alternatives: [
        {
          id: 'Basic Web',
          icon: 'pi pi-plus',
          blockTitle: 'Basic Web - $150/mo',
          blockDescription: 'For small businesses that just need their site kept fresh.',
          isRecommended: false,
          blockOptions: [
            'Up to 2 hours of monthly updates',
            'Monthly security & plugin updates',
            'Website backups & uptime monitoring',
            'Minor content changes (text/images)'
          ]
        }
      ]
    },
    {
      id: 'Pro IT',
      icon: 'pi pi-star',
      isRecommended: true,
      blockTitle: 'Pro IT – $500/mo',
      blockDescription: 'Ideal for growing businesses with regular tech needs.',
      blockOptions: [
        'Up to 10 hours of support per month',
        '24-hour guaranteed response time',
        'Website updates & feature additions',
        'SaaS setup & integrations',
        'Ongoing security monitoring',
        'Priority email & phone support',
      ],
      alternatives: [
        {
          id: 'Pro Web',
          icon: 'pi pi-star',
          blockTitle: 'Pro Web - $300/mo',
          blockDescription: 'For businesses that want consistent improvements.',
          isRecommended: true, // Most Popular
          blockOptions: [
            'Up to 5 hours of updates per month',
            'Security, backups & uptime monitoring',
            'Monthly SEO checks & optimization tweaks',
            'Speed/performance optimization',
            'Priority response (24 hrs)'
          ]
        }
      ]
    },
    {
      id: 'Elite IT',
      icon: 'pi pi-plus',
      blockTitle: 'Elite IT – $1,000/mo',
      blockDescription:
        'Full coverage for businesses that need fast, unlimited help.',
      blockOptions: [
        'Unlimited requests within scope',
        '4-hour guaranteed response time',
        'Quarterly technology strategy session',
        'Comprehensive security & performance monitoring',
        'All Pro features included',
      ],
      alternatives: [
        {
          id: 'Elite Web',
          icon: 'pi pi-plus',
          blockTitle: 'Elite Web - $600/mo',
          blockDescription: 'For businesses that treat their website as a true growth engine.',
          isRecommended: false,
          blockOptions: [
            'Up to 12 hours of updates per month',
            'Everything in Plus',
            'Monthly analytics & reporting',
            'Conversion optimization (CTAs, landing pages, funnels)',
            'Priority scheduling for urgent fixes'
          ]
        }
      ]
    },
  ]
}
