import { Component, effect, resource, signal } from '@angular/core'
import { getSyncStr } from './utils'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'sync_resources',
})
export class SyncWithResources {
  counter = signal([1])
  // 返回值是个 ref
  // 每当 request 依赖变化都会重新执行 loader
  syncDataObj = resource({
    request: () => this.counter(),
    loader: ({ request }) => getSyncStr(request),
  })

  // effect 如果要监听，一定要使用 value
  logSyncData = effect(() => {
    console.log(this.syncDataObj)
    console.log(this.syncDataObj.value())
  })

  changeCounterArr() {
    const dateStr = +new Date() + ''
    console.log({ dateStr })
    this.counter.set([...this.counter(), +dateStr[11]])
  }
}
