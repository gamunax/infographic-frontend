import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { HeaderComponent } from './components/header/header.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionComponent } from './components/section/section.component';
import { ImageComponent } from './components/image/image.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionMainComponent,
    CarouselComponent,
    SectionComponent,
    ImageComponent,
    CardComponent
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
    CarouselComponent,
    SectionComponent,
    ImageComponent,
    CardComponent
  ]
})
export class SharedModule { }
