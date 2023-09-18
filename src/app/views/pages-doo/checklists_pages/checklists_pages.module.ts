import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChecklistsPagesComponent } from './checklists-pages.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ListAllChecklistComponent } from './list-all-checklist/list-all-checklist.component';
import { ChecklistService } from 'src/app/services/checklist-services/checklist.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgxMaskModule } from 'ngx-mask';

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
    ReactiveFormsModule,
    CustomFormsModule, // Ngx-custom-validators
    NgxMaskModule.forRoot({ validation: true}), // Ngx-mask
    NgSelectModule, // Ng-select
    TagInputModule, 
    FormsModule,
  ],
  providers: [
    ChecklistService
  ]
})
export class ChecklistsPagesModule { }
