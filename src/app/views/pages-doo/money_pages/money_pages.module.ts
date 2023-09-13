import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MoneyPagesComponent } from './money-pages.component';
import { CalendarPaymentsComponent } from './calendar-payments/calendar-payments.component';
import { NgbDatepickerModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  {
    path: '',
    // component: MoneyPagesComponent,
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
    NgxDatatableModule,
    NgbNavModule,
    PerfectScrollbarModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    FullCalendarModule,
    QuillModule.forRoot(),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class MoneyPagesModule { }
