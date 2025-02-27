import { Component, signal } from '@angular/core'
import { HostBindingComp } from './components/hostBinding/index.comp'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'life-cycle',
  imports: [HostBindingComp],
})
export class LifeCycle {
  isActive = signal(false)
  value = 0

  toggleActive() {
    this.isActive.set(!this.isActive())
  }

  ngOnInit() {
    console.log('onInit')
  }

  ngOnChanges(...args: any[]) {
    console.log('onChanges', args)
  }

  ngOnDestroy() {
    console.log('onDestroy')
  }
}
