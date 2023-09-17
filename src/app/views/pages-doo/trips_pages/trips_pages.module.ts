import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { TripDetailsComponent } from './all-trips/trip-details/trip-details.component';
import { TripService } from 'src/app/services/trips-services/trip.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentMethodService } from 'src/app/services/money-services/payment_method.service';
import { BoardingPointService } from 'src/app/services/trips-services/boarding_point/boarding_point.service';
import { FileReaderService } from 'src/app/services/file-reader.service';
import { AddressSearchService } from 'src/app/services/trips-services/address-search.service';
import { ComponentService } from 'src/app/services/trips-services/component.service';
import { ArchwizardModule } from 'angular-archwizard';
import { QuillModule } from 'ngx-quill';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    // component: AllTripsComponent,
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
  declarations: [
    AllTripsComponent, 
    NewTripComponent,
    TripDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    NgxPaginationModule, 
    FormsModule,
    ReactiveFormsModule, 
    FeatherIconModule,
    QuillModule.forRoot(),
    ArchwizardModule,
    NgbModule,
  ],
  providers: [
    TripService,
    PaymentMethodService,
    BoardingPointService,
    ComponentService,
    FileReaderService,
    AddressSearchService
  ]
})
export class TripsPagesModule { }
