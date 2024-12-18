import { Component } from '@angular/core';

@Component({
  template: `
    <h1>FirstComponent h1</h1>
    <p>this is the first time on it</p>
  `,
  styles: `
    h1 {
      color: red;
    }
  `,
  selector: 'first-comp',
})
export class FirstComponent {}
