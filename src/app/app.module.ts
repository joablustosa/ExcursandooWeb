import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginInterceptor } from './views/pages/auth/login/login.interceptor';
import { LoginService } from './services/administrator/login.service';
import { UserComponent } from './views/pages-doo/administrator_pages/user/user.component';
import { ProfileComponent } from './views/pages-doo/administrator_pages/profile/profile.component';
import { ProviderPagesComponent } from './views/pages-doo/provider_pages/provider-pages.component';
import { BudgetsPagesComponent } from './views/pages-doo/budgets-pages/budgets-pages.component';
import { InputCategoryComponent } from './views/pages-doo/configuration_pages/input-category/input-category.component';
import { InputSubCategoryComponent } from './views/pages-doo/configuration_pages/input-sub-category/input-sub-category.component';
import { LocationComponent } from './views/pages-doo/configuration_pages/location/location.component';
import { OutputCategoryComponent } from './views/pages-doo/configuration_pages/output-category/output-category.component';
import { OutputSubCategoryComponent } from './views/pages-doo/configuration_pages/output-sub-category/output-sub-category.component';
import { PaymentMethodsComponent } from './views/pages-doo/configuration_pages/payment-methods/payment-methods.component';
import { TripCategoryComponent } from './views/pages-doo/configuration_pages/trip-category/trip-category.component';
import { TripSubCategoryComponent } from './views/pages-doo/configuration_pages/trip-sub-category/trip-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UserComponent,
    ProfileComponent,
    ProviderPagesComponent,
    BudgetsPagesComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    LoginService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
