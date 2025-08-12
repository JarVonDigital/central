import {Component, signal} from '@angular/core';
import {Nav} from './components/nav/nav';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-root',
  imports: [Nav, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hub');
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
  ]
}
