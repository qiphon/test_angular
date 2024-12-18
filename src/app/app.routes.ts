import { Routes } from '@angular/router'
import { FirstComponent } from '../firstComponent/firstComponent.comp'
import { FirstTemplate } from '../firstTemplate/firstTemplate.comp'

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
]
