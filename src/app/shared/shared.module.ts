import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';

import { HeaderComponent } from './header/header.component';
import { SectionMainComponent } from './section-main/section-main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SectionMainComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzCardModule
  ],
  exports: [
    HeaderComponent,
    SectionMainComponent
  ]
})
export class SharedModule { }
