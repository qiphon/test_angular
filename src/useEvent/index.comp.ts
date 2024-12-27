import { Component, signal } from '@angular/core'
import { Desc } from './components/desc/desc.comp'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'use-events',
  imports: [Desc],
})
export class UseEvents {
  inputVal = signal('')
  showModal = signal(false)

  changeProp() {
    this.inputVal.set(this.inputVal() + 1)
  }

  closeProps(val: boolean) {
    this.showModal.set(val)
  }

  toggleModal(ev: MouseEvent) {
    console.log('toggleModal', ev)
    this.showModal.set(!this.showModal())
  }
}
