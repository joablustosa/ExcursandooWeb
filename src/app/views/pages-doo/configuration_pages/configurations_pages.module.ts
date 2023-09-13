import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InputCategoryComponent } from './input-category/input-category.component';
import { TripCategoryComponent } from './trip-category/trip-category.component';
import { TripSubCategoryComponent } from './trip-sub-category/trip-sub-category.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { InputSubCategoryComponent } from './input-sub-category/input-sub-category.component';
import { OutputSubCategoryComponent } from './output-sub-category/output-sub-category.component';
import { OutputCategoryComponent } from './output-category/output-category.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    // component: InputCategoryComponent,
    children: [
      {
        path: '',
        redirectTo: 'configurations',
        pathMatch: 'full'
      },
      {
        path: 'output-category',
        component: OutputCategoryComponent
      },
      {
        path: 'output-sub-category',
        component: OutputSubCategoryComponent
      },
      {
        path: 'input-category',
        component: InputCategoryComponent
      },
      {
        path: 'input-sub-category',
        component: InputSubCategoryComponent
      },
      {
        path: 'payment-methods',
        component: PaymentMethodsComponent
      },
      {
        path: 'trip-sub-category',
        component: TripSubCategoryComponent
      },
      {
        path: 'trip-category',
        component: TripCategoryComponent
      },
      {
        path: 'location',
        component: LocationComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    LocationComponent,
    TripCategoryComponent,
    TripSubCategoryComponent,
    InputCategoryComponent,
    OutputCategoryComponent,
    PaymentMethodsComponent,
    InputSubCategoryComponent,
    OutputSubCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class ConfigurationsPagesModule { }
