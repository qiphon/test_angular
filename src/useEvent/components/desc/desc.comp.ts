import { Component, input, output } from '@angular/core'

@Component({
  template: `
    <h4>
      desc comp <span>desc required prop {{ title2() }}</span>
    </h4>
    <div>
      child
      <button (click)="close()">close modal button</button>
      <button (click)="this.closeFn.emit(false)">close modal button2</button>
    </div>
  `,
  selector: 'descA',
})
export class Desc {
  title2 = input.required<string, string>({ transform: str => str.trim() })

  closeFn = output<boolean>()

  close() {
    this.closeFn.emit(false)
  }
}
