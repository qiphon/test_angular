import { Component, computed, effect, signal } from '@angular/core'

@Component({
  templateUrl: './firstSignal.comp.html',
  styleUrl: './firstSignal.comp.less',
  selector: 'use_signal',
})
export class FirstSignal {
  count = signal(1)
  countString = signal('0')
  computedValue = computed(() => this.count() * 4)
  arr = [1, 2, 3, 4]

  constructor() {
    effect(() => {
      console.log('count change')
      console.log(this.count())
    })

    effect(() => {
      console.log('count string change')
      console.log(this.countString())
    })
  }

  updateCountStr() {
    this.countString.set(this.countString() + this.count())
  }

  updateCount() {
    this.count.update(val => ++val)
  }
}
