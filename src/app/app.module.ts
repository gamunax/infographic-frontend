import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const analyticsModules = environment.analytics.status ? [
  NgxGoogleAnalyticsModule.forRoot(environment.analytics.services.ga),
  NgxGoogleAnalyticsRouterModule
] : [];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SlickCarouselModule,
    NzModalModule,
    ...analyticsModules,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
