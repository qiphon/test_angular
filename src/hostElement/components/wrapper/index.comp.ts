import { Component } from '@angular/core'

@Component({
  template: `
    <div class="wrapper">
      <nav>component wrapper</nav>
      <section>
        slot start
        <hr />
        <ng-content select="[wrapper-nav]"
          >没有使用这个插槽时我就会显示</ng-content
        >
        <hr />
        <main>
          main content slot
          <ng-content></ng-content>
        </main>

        <div>下面是插槽别名</div>
        <ng-content select="[wrapper-foot]">我是 footer 插槽</ng-content>
        <hr />
        slot end
      </section>
    </div>
  `,
  styles: `
  ::ng-deep .active { font-size: 13px; };
  section { border: 10px solid red; }; main {padding: 10px;background: #f0f0f0;}`,
  selector: 'wrapper',
  host: {
    class: 'wrapper active',
  },
})
export class Wrapper {}
