import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { HeaderComponent } from './header/header.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionMainComponent,
    CardComponent,
    SectionComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzCardModule,
    SlickCarouselModule,
    NzModalModule
  ],
  exports: [
    HeaderComponent,
    SectionMainComponent,
    CardComponent,
    SectionComponent,
    ImageComponent
  ]
})
export class SharedModule { }
