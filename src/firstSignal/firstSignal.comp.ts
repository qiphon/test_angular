import { Component, computed, signal } from '@angular/core'

@Component({
  templateUrl: './firstSignal.comp.html',
  styleUrl: './firstSignal.comp.less',
  selector: 'use_signal',
})
export class FirstSignal {
  count = signal(1)
  computedValue = computed(() => this.count() * 4)

  updateCount() {
    this.count.update(val => ++val)
  }
}
