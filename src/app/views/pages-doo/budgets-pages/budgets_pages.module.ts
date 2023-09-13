import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BudgetsPagesComponent } from './budgets-pages.component';

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
    BudgetsPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class BudgetsPagesModule { }
