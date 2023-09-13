import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MessagesPagesComponent } from './messages-pages.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesPagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'messages',
        pathMatch: 'full'
      },
      {
        path: 'all-trips',
        component: MessagesPagesComponent
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
    MessagesPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class MessagesPagesModule { }
