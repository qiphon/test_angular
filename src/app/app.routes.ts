import { Routes } from '@angular/router'
import { FirstComponent } from '../firstComponent/firstComponent.comp'
import { FirstTemplate } from '../firstTemplate/firstTemplate.comp'
import { UseSubComp } from '../useSubComp/useSubComp.comp'
import { FirstSignal } from '../firstSignal/firstSignal.comp'
import { LinkSignalComp } from '../linkSignal/index.comp'
import { SyncWithResources } from '../asyncWithResources/index.comp'
import { UseProps } from '../useProps/index.comp'
import { UseEvents } from '../useEvent/index.comp'
import { NGSlot } from '../ngSlot/index.comp'
import { HostElement } from '../hostElement/index.comp'
import { LifeCycle } from '../lifeCycle/index.comp'

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
  {
    title: 'link-signal',
    path: 'link-signal',
    component: LinkSignalComp,
  },
  {
    title: 'sync_resources',
    path: 'sync_resources',
    component: SyncWithResources,
  },
  {
    title: 'use-props',
    path: 'use-props',
    component: UseProps,
  },
  {
    title: 'use-events',
    path: 'use-events',
    component: UseEvents,
  },
  {
    title: 'use-slot',
    path: 'use-slot',
    component: NGSlot,
  },
  {
    title: 'life-cycle',
    path: 'life-cycle',
    component: LifeCycle,
  },
]
