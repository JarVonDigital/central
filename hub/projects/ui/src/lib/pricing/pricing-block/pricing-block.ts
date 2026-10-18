import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PricingStruct } from '../../interfaces/pricing/pricing-struct';
@Component({
  selector: 'jde-pricing-block',
  imports: [CurrencyPipe],
  templateUrl: './pricing-block.html',
  styleUrl: './pricing-block.scss',
})
export class PricingBlock {
  block = input.required<PricingStruct>();
  offerSelected = output<string>();
}
