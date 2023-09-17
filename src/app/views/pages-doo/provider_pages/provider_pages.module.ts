import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProviderPagesComponent } from './provider-pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: ProviderPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'providers',
        pathMatch: 'full'
      },
      {
        path: 'providers',
        component: ProviderPagesComponent
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
  declarations: [ProviderPagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    NgbModule
  ]
})
export class ProviderPagesModule { }
