import { Component, computed, effect, signal, untracked } from '@angular/core'

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
  sameValTest = signal(['1'], { equal: (a, b) => Object.is(a[0], b[0]) })
  sameValNotEqualFn = signal(['1'])

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

  setEqualValue() {
    console.log('set equal value')
    this.sameValNotEqualFn.set(['1'])
    this.sameValTest.set(['1'])
  }

  private equalEffect = effect(() => {
    console.log(
      '----------equalEffect , set same value will not rerender ---------',
    )
    console.log(this.sameValTest())
  })
  private notEqualEffect = effect(() => {
    console.log('----------not equalEffect---------')
    console.log(this.sameValNotEqualFn())
  })
  private notEqualEffectAddUntrack = effect(() => {
    console.log(
      '----------not notEqualEffectAddUntrack--- count change will not log ------',
    )
    console.log(this.sameValNotEqualFn(), untracked(this.count))
  })

  private logCountEffect = effect(() => {
    console.log('private log effect , not in constructor')
    console.log(this.computedValue())
  })

  // TODO need pass injector in constuctor
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
