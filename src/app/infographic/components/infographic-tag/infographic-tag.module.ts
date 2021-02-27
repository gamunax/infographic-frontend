import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfographicTagRoutingModule } from './infographic-tag-routing.module';
// import { SharedModule } from '../../../shared/shared.module';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';

// import { InfographicTagComponent } from './infographic-tag.component';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  declarations: [
    // InfographicTagComponent
  ],
  imports: [
    CommonModule,
    InfographicTagRoutingModule,
    // SharedModule,
    NzSkeletonModule,
    NzSpinModule,
    NzIconModule.forRoot(icons)
  ]
})
export class InfographicTagModule { }
