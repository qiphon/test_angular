import { Component, signal } from '@angular/core'
import { Wrapper } from './components/wrapper/index.comp'
import { HostBindingComp } from './components/hostBinding/index.comp'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'el-host',
  imports: [Wrapper, HostBindingComp],
  host: {
    role: 'host',
    class: 'host-el',
    '[class.active]': 'isActive()',
    '(mouseenter)': 'toggleActive()',
    '[attr.aria-valuenow]': 'value',
  },
})
export class HostElement {
  isActive = signal(false)
  value = 0

  toggleActive() {
    this.isActive.set(!this.isActive())
  }
}
