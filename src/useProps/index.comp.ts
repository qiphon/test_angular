import { Component, computed, signal } from '@angular/core'
import { FirstComponent } from '../firstComponent/firstComponent.comp'
import { Desc } from './components/desc/desc.comp'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'use-props',
  imports: [FirstComponent, Desc],
})
export class UseProps {
  inputVal = signal('')
  input2 = signal('default model value')
  protected input3 = 'input3'
  input4 = computed(() => this.input3)

  changeProp() {
    this.inputVal.set(this.inputVal() + 1)
  }

  changeModelVal() {
    this.input2.update(v => v + 2)
  }
}
