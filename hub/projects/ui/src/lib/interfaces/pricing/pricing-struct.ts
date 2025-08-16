export interface PricingStruct {
  id: string;
  blockTitle: string;
  blockDescription: string;
  blockOptions: string[];
  label?: string;
  icon?: string;
  isRecommended?: boolean;
  alternatives?: PricingStruct[]
}
