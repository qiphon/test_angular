import { Component } from '@angular/core'
import { FirstComponent } from '../firstComponent/firstComponent.comp'
import { Desc } from './components/desc/desc.comp'

@Component({
  templateUrl: './useSubComp.comp.html',
  styleUrl: './useSubComp.comp.less',
  selector: 'use_sub_comp',
  imports: [FirstComponent, Desc],
})
export class UseSubComp {}
