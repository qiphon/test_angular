import { Component, signal } from '@angular/core'
import { Desc } from './components/desc/desc.comp'
import { Wrapper } from './components/wrapper/index.comp'

@Component({
  templateUrl: './index.comp.html',
  styleUrl: './index.comp.less',
  selector: 'use-events',
  imports: [Desc, Wrapper],
})
export class NGSlot {}
