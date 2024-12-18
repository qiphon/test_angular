import { Routes } from '@angular/router'
import { FirstComponent } from '../firstComponent/firstComponent.comp'
import { FirstTemplate } from '../firstTemplate/firstTemplate.comp'
import { UseSubComp } from '../useSubComp/useSubComp.comp'
import { FirstSignal } from '../firstSignal/firstSignal.comp'

export const routes: Routes = [
  {
    title: 'first component',
    path: 'first',
    component: FirstComponent,
  },
  {
    title: 'FirstTemplate',
    path: 'first_temp',
    component: FirstTemplate,
  },
  {
    title: 'UseSubComp',
    path: 'use_sub_comp',
    component: UseSubComp,
  },
  {
    title: 'use_signal',
    path: 'use_signal',
    component: FirstSignal,
  },
]
