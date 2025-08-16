import {Component, computed, effect, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {SelectButton} from 'primeng/selectbutton';
import {PricingStruct} from '../../interfaces/pricing/pricing-struct';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'jde-pricing-block',
  imports: [
    SelectButton,
    FormsModule
  ],
  templateUrl: './pricing-block.html',
  styleUrl: './pricing-block.scss'
})
export class PricingBlock {
  block: InputSignal<PricingStruct> = input.required();
  alternatives = computed(() => [this.block(), ...(this.block().alternatives ?? [])])
  selectedAlternative: WritableSignal<PricingStruct | undefined> = signal(undefined)
  $initialBlockSetupEffect = effect(() => {
    if (this.block()) {
      this.selectedAlternative.set(this.block());
    }
  })

  onAlternativeChange($event: any) {
    this.selectedAlternative.set(this.alternatives().find(b => (b.id === $event)));
  }
}
