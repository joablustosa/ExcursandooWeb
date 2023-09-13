import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MoneyPagesComponent } from './money-pages.component';
import { CalendarPaymentsComponent } from './calendar-payments/calendar-payments.component';

const routes: Routes = [
  {
    path: '',
    component: MoneyPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'money',
        pathMatch: 'full'
      },
      {
        path: 'money',
        component: MoneyPagesComponent
      },
      {
        path: 'calendar-payments',
        component: CalendarPaymentsComponent
      },
      // {
      //   path: 'all-trips/trip-details',
      //   component: TripDetailsComponent
      // }
    ]
  }
]

@NgModule({
  declarations: [
    MoneyPagesComponent,
    CalendarPaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class MoneyPagesModule { }
