import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  template: `
    <div>
      <h1>FirstComponent h1</h1>
      <p>this is the first time on it</p>
    </div>
  `,
  styles: `
    h1 {
      color: red;
    }
  `,
  selector: 'first-comp, aaa',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FirstComponent {}
