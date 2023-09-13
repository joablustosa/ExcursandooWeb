import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReportsPagesComponent } from './reports-pages.component';
import { ReportMoneyComponent } from './report-money/report-money.component';
import { ReportTrevelersComponent } from './report-trevelers/report-trevelers.component';
import { ReportTripsComponent } from './report-trips/report-trips.component';

const routes: Routes = [
  {
    path: '',
    // component: ReportsPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-trips',
        pathMatch: 'full'
      },
      {
        path: 'report-money',
        component: ReportMoneyComponent
      },
      {
        path: 'report-trevelers',
        component: ReportTrevelersComponent
      },
      {
        path: 'report-trips',
        component: ReportTripsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ReportsPagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class ReportsModule { }
