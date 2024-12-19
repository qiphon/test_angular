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
    const destroyCountEffect = effect(() => {
      console.log('count change')
      console.log(this.count())

      if (this.count() > 5) {
        this.logCountEffect.destroy()
      }
    })

    effect(oncleanup => {
      console.log('count string change')
      console.log(this.countString())

      oncleanup(() => {
        console.log('count string cleanup')
        destroyCountEffect.destroy()
      })
    })
  }

  private logCountEffect = effect(() => {
    console.log('private log effect , not in constructor')
    console.log(this.computedValue())
  })
  // need pass injector in constuctor
  // private logCountStringEffect() {
  //   return effect(() => {
  //     console.log('log string effect')
  //     console.log(this.countString())
  //   }, {injector: this.injector})
  // }

  updateCountStr() {
    this.countString.set(this.countString() + this.count())
  }

  updateCount() {
    this.count.update(val => ++val)
  }
}
