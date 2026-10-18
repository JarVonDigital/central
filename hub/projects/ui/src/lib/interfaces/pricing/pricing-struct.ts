export interface PricingStruct {
  id: string;
  name: string;
  description: string;
  price: number;
  pricePrefix: string;
  billingPeriod: string;
  scope: readonly string[];
  note: string;
  cta: string;
  featured?: boolean;
}
