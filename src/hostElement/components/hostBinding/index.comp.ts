import {
  Component,
  effect,
  HostBinding,
  HostListener,
  signal,
} from '@angular/core'

@Component({
  template: `
    <div class="wrapper" (click)="updateDisabled()">
      host binding click change disabled {{ disabled() }}
    </div>
  `,
  styles: `.wrapper {margin-bottom: 40px;};`,
  selector: 'host-binding',
  host: {
    style: 'color: blue;',
    class: 'host-binding-test',
    // '[attr.tabindex]': 'disabled() ? -1 : 1',
    // '[attr.disabled]': 'disabled() ',
  },
})
export class HostBindingComp {
  disabled = signal(false)

  @HostBinding('[attr.disabled]') getDisabled() {
    return this.disabled()
  }
  @HostBinding('class.active') clsActive: string = ''
  @HostBinding('style') style = 'color: pink;'
  @HostBinding('attr.tabindex') tabindex = -1

  @HostListener('click', ['$event']) click(event: KeyboardEvent) {
    console.log('click', event)
  }

  listenChange = effect(() => {
    if (this.disabled()) {
      this.clsActive = ''
      this.tabindex = -1
    } else {
      this.tabindex = 3
      this.clsActive = 'active'
    }
  })

  updateDisabled() {
    this.disabled.set(!this.disabled())
  }
}
