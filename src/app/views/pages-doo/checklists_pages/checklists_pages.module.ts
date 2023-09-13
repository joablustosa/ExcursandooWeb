import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChecklistsPagesComponent } from './checklists-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ChecklistsPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'checklists',
        pathMatch: 'full'
      },
      {
        path: 'checklists',
        component: ChecklistsPagesComponent
      },
      // {
      //   path: 'new-trip',
      //   component: NewTripComponent
      // },
      // {
      //   path: 'all-trips/trip-details',
      //   component: TripDetailsComponent
      // }
    ]
  }
]

@NgModule({
  declarations: [
    ChecklistsPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class ChecklistsPagesModule { }
