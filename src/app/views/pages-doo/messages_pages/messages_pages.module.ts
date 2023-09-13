import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    // component: AllTripsComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'all-trips',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'all-trips',
      //   component: AllTripsComponent
      // },
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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class MessagesPagesModule { }
