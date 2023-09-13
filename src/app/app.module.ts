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
import { AllTripsComponent } from './views/pages-doo/trips_pages/all-trips/all-trips.component';
import { NewTripComponent } from './views/pages-doo/trips_pages/new-trip/new-trip.component';
import { TripDetailsComponent } from './views/pages-doo/trips_pages/all-trips/trip-details/trip-details.component';
import { ReportTripsComponent } from './views/pages-doo/reports_pages/report-trips/report-trips.component';
import { ReportTrevelersComponent } from './views/pages-doo/reports_pages/report-trevelers/report-trevelers.component';
import { ReportMoneyComponent } from './views/pages-doo/reports_pages/report-money/report-money.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UserComponent,
    ProfileComponent,
    AllTripsComponent,
    NewTripComponent,
    TripDetailsComponent,
    ReportTripsComponent,
    ReportTrevelersComponent,
    ReportMoneyComponent,
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
