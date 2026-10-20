import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OFFERS } from '../offers';
export function websiteUrl(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  try {
    const u = new URL(control.value);
    return ['http:', 'https:'].includes(u.protocol) &&
      u.hostname.includes('.') &&
      !u.username &&
      !u.password
      ? null
      : { url: true };
  } catch {
    return { url: true };
  }
}
const nonBlank = Validators.pattern(/\S/);
@Component({
  selector: 'app-quote',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class Quote implements AfterViewInit, OnDestroy {
  @ViewChild('captchaContainer') captchaContainer?: ElementRef<HTMLDivElement>;
  offers = OFFERS;
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, nonBlank, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/,
        ),
        Validators.maxLength(254),
      ],
    ],
    business: ['', [Validators.required, nonBlank, Validators.maxLength(150)]],
    offer: ['', [Validators.required]],
    contactFax: [''],
    budget: ['', [Validators.required]],
    website: ['', [websiteUrl, Validators.maxLength(500)]],
    description: [
      '',
      [Validators.required, nonBlank, Validators.maxLength(4000)],
    ],
  });
  status = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');
  message = signal('');
  captchaMessage = signal('Loading verification…');
  private captchaToken = '';
  private captchaSiteKey = '';
  private widgetId?: number;
  private destroyed = false;
  private readonly captchaCallback = `jarvonRecaptchaLoaded${Math.random().toString(36).slice(2)}`;

  async ngAfterViewInit() {
    try {
      const response = await fetch('/site-config.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('configuration');
      const config = await response.json();
      if (typeof config.recaptchaSiteKey !== 'string' || !/^[A-Za-z0-9_-]{10,}$/.test(config.recaptchaSiteKey))
        throw new Error('configuration');
      if (this.destroyed) return;
      this.captchaSiteKey = config.recaptchaSiteKey;
      const global = window as typeof window & { grecaptcha?: RecaptchaApi; [key: string]: unknown };
      global[this.captchaCallback] = () => this.renderCaptcha();
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?onload=${this.captchaCallback}&render=explicit`;
      script.async = true;
      script.defer = true;
      script.onerror = () => this.captchaMessage.set('Verification could not load. Please retry or email us.');
      document.head.appendChild(script);
    } catch {
      if (!this.destroyed) this.captchaMessage.set('Verification is unavailable. Please email us instead.');
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    delete (window as typeof window & { [key: string]: unknown })[this.captchaCallback];
  }

  private renderCaptcha() {
    if (this.destroyed || !this.captchaContainer || !this.captchaSiteKey) return;
    const api = (window as typeof window & { grecaptcha?: RecaptchaApi }).grecaptcha;
    this.widgetId = api?.render(this.captchaContainer.nativeElement, {
      sitekey: this.captchaSiteKey,
      callback: (token: string) => {
        this.captchaToken = token;
        this.captchaMessage.set('');
      },
      'expired-callback': () => {
        this.captchaToken = '';
        this.captchaMessage.set('Verification expired. Please check the box again.');
      },
      'error-callback': () => {
        this.captchaToken = '';
        this.captchaMessage.set('Verification could not load. Please retry or email us.');
      },
    });
    this.captchaMessage.set('');
  }
  invalid(field: keyof typeof this.form.controls) {
    const c = this.form.controls[field];
    return c.invalid && c.touched;
  }
  selectOffer(id: string) {
    if (this.status() === 'submitting') return;
    if (this.status() === 'success') this.another();
    this.form.controls.offer.setValue(id);
  }
  async submit() {
    if (this.status() === 'submitting' || this.status() === 'success') return;
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.message.set('Please check the highlighted fields.');
      const field = Object.keys(this.form.controls).find(
        (key) => this.form.get(key)?.invalid,
      );
      if (field) document.getElementById(field)?.focus();
      return;
    }
    if (!this.captchaToken) {
      this.captchaMessage.set('Please complete the reCAPTCHA check.');
      this.captchaContainer?.nativeElement.scrollIntoView({ block: 'center' });
      return;
    }
    this.status.set('submitting');
    this.message.set('Sending your inquiry…');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const configResponse = await fetch('/site-config.json', {
        cache: 'no-store',
        signal: controller.signal,
      });
      if (!configResponse.ok) throw new Error('configuration');
      const config = await configResponse.json();
      if (
        typeof config.inquiryEndpoint !== 'string' ||
        !/^https:\/\/[a-z0-9]+\.execute-api\.[a-z0-9-]+\.amazonaws\.com\/inquiries$/.test(
          config.inquiryEndpoint,
        )
      )
        throw new Error('configuration');
      const values = this.form.getRawValue();
      const response = await fetch(config.inquiryEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...values,
          recaptchaToken: this.captchaToken,
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('submission');
      this.status.set('success');
      this.message.set(
        'Your inquiry has been received. I’ll respond within two business days.',
      );
    } catch {
      this.status.set('error');
      this.message.set(
        'Your inquiry could not be confirmed. Your details are still here. Try again, or email jarvondigital@gmail.com.',
      );
    } finally {
      clearTimeout(timeout);
      this.captchaToken = '';
      if (this.status() !== 'success' && this.widgetId !== undefined)
        (window as typeof window & { grecaptcha?: RecaptchaApi }).grecaptcha?.reset(this.widgetId);
    }
  }
  another() {
    this.form.reset();
    this.status.set('idle');
    this.message.set('');
    this.captchaMessage.set('');
    setTimeout(() => this.renderCaptcha(), 0);
  }
}

interface RecaptchaApi {
  render(container: HTMLElement, options: Record<string, unknown>): number;
  reset(widgetId: number): void;
}
