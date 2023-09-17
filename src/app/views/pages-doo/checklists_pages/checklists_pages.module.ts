import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChecklistsPagesComponent } from './checklists-pages.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ListAllChecklistComponent } from './list-all-checklist/list-all-checklist.component';

const routes: Routes = [
  {
    path: '',
    component: ChecklistsPagesComponent,
    children: [
      {
        path: '',
        children: [
          { 
            path: ':id', 
            component: ListAllChecklistComponent 
          },
        ]
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
    ChecklistsPagesComponent,
    ListAllChecklistComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    NgbCollapseModule,
  ]
})
export class ChecklistsPagesModule { }
