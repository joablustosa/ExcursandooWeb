import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { TripDetailsComponent } from './all-trips/trip-details/trip-details.component';

const routes: Routes = [
  {
    path: '',
    component: AllTripsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-trips',
        pathMatch: 'full'
      },
      {
        path: 'all-trips',
        component: AllTripsComponent
      },
      {
        path: 'new-trip',
        component: NewTripComponent
      },
      {
        path: 'all-trips/trip-details',
        component: TripDetailsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [AllTripsComponent, NewTripComponent, TripDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class TripsPagesModule { }
