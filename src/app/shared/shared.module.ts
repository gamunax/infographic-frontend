import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from './header/header.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionMainComponent,
    CardComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzCardModule,
    SlickCarouselModule
  ],
  exports: [
    HeaderComponent,
    SectionMainComponent,
    CardComponent,
    SectionComponent
  ]
})
export class SharedModule { }
