import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { InfographicComponent } from './infographic/infographic.component';

import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InfographicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
