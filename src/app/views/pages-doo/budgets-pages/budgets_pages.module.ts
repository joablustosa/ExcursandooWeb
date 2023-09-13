import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BudgetsPagesComponent } from './budgets-pages.component';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  {
    path: '',
    component: BudgetsPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'budgets',
        pathMatch: 'full'
      },
      {
        path: 'budgets',
        component: BudgetsPagesComponent
      },
      // {
      //   path: 'calendar-payments',
      //   component: CalendarPaymentsComponent
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
    BudgetsPagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FullCalendarModule, 
    PerfectScrollbarModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCollapseModule,
    NgSelectModule,
    QuillModule.forRoot(), 
  ]
})
export class BudgetsPagesModule { }
