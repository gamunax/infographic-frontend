import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';

import { InfographicRoutingModule } from './infographic-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InfographicComponent } from './components/infographic/infographic.component';
import { InfographicDetailComponent } from './components/infographic-detail/infographic-detail.component';
import { InfographicTagComponent } from './components/infographic-tag/infographic-tag.component';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  declarations: [
    InfographicComponent,
    InfographicDetailComponent,
    InfographicTagComponent
  ],
  imports: [
    CommonModule,
    InfographicRoutingModule,
    SharedModule,
    NzIconModule.forRoot(icons)
  ]
})
export class InfographicModule { }
