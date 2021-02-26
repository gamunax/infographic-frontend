import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfographicDetailRoutingModule } from './infographic-detail-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InfographicDetailComponent } from './infographic-detail.component';


@NgModule({
  declarations: [
    InfographicDetailComponent
  ],
  imports: [
    CommonModule,
    InfographicDetailRoutingModule,
    SharedModule,
  ]
})
export class InfographicDetailModule { }
