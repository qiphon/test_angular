import { Component, input, model, Input, effect, computed } from '@angular/core'

@Component({
  template: `<h3>{{ title() }}</h3>
    <h4>
      desc comp <span>desc required prop {{ title2() }}</span>
      <span>___computed input___ {{ compTit() }}</span> <br />
      <span>optional prop {{ title3 }}</span>
      <button (click)="updateVal()">update model value</button>
      <div>{{ title4() }}</div>
      <div>test getter and setter: {{ this._testGet }}</div>
    </h4>`,
  selector: 'descA',
})
export class Desc {
  constructor() {
    effect(() => {
      console.log('Desc constructor', this.title2())
    })
  }

  title = input('no prop added', { transform: (str?: string) => str?.trim() })
  title2 = input.required<string, string>({ transform: str => str.trim() })
  compTit = computed(() => this.title2() + 'computed')
  // title3 = input<string>('not prop transfered')
  @Input() title3 = 'not props transfered'
  title4 = input('alias value', { alias: 'titAlias' })

  value = model('0')
  // value2 = model.required()

  // input getter & setter
  @Input()
  get testGet() {
    return this._testGet
  }
  set testGet(val: string) {
    this._testGet = val + '_testGet_'
  }
  _testGet = 'testGet'

  updateVal() {
    this.value.update(v => v + 1)
  }
}
