import {Component, input, InputSignal} from '@angular/core';
import {PricingStruct} from '../interfaces/pricing/pricing-struct';
import {PricingBlock} from './pricing-block/pricing-block';

@Component({
  selector: 'jde-pricing',
  imports: [
    PricingBlock
  ],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {
  blocks: InputSignal<PricingStruct[]> = input.required();
}
