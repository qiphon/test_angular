import { Component, computed, linkedSignal, signal } from '@angular/core'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'link-signal',
})
export class LinkSignalComp {
  counter = signal([1])
  counter2 = signal([2])
  linkCounter = linkedSignal(
    () => this.counter().slice(-1)[0] + this.counter2().slice(-1)[0],
  )
  computedCounter = computed(
    () => this.counter().slice(-1)[0] + this.counter2().slice(-1)[0],
  )

  linkCounter2 = linkedSignal({
    source: this.counter,
    computation(source, previous) {
      console.log(source, { previous })
      return previous?.source ? previous.source.slice(-1) : '<no previous>'
    },
  })

  linkCounter3 = linkedSignal({
    source: () => [this.counter(), this.counter2()],
    computation(source, previous) {
      console.log('---------linkCounter3------------')
      console.log(source, { previous })
      return previous?.value ? JSON.stringify(previous.source) : '<no previous>'
    },
  })

  changeCounterArr() {
    const dateStr = +new Date() + ''
    console.log({ dateStr })
    this.counter.set([...this.counter(), +dateStr[11]])
  }
}
