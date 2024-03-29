import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { InfographicRoutingModule } from './infographic-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InfographicComponent } from './components/infographic/infographic.component';
// import { InfographicDetailComponent } from '../infographic-detail/infographic-detail.component';	
// import { InfographicTagComponent } from './components/infographic-tag/infographic-tag.component';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  declarations: [
    InfographicComponent,
    // InfographicDetailComponent,
    // InfographicTagComponent
  ],
  imports: [
    CommonModule,
    InfographicRoutingModule,
    SharedModule,
    NzSkeletonModule,
    NzSpinModule,
    NzIconModule.forRoot(icons)
  ]
})
export class InfographicModule { }
