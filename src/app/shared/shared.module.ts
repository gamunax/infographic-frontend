import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
// import { ScrollingModule } from '@angular/cdk/scrolling';

import { SharedRoutingModule } from './shared-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule  } from 'ng-zorro-antd/dropdown';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';

import { HeaderComponent } from './components/header/header.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionComponent } from './components/section/section.component';
import { ImageComponent } from './components/image/image.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { OverlayNavigationComponent } from './components/overlay-navigation/overlay-navigation.component';
import { CardOptionsComponent } from './components/card-options/card-options.component';
import { LazyImgDirective } from './directives/lazy-img.directive';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    HeaderComponent,
    SectionMainComponent,
    CarouselComponent,
    SectionComponent,
    ImageComponent,
    CardComponent,
    FooterComponent,
    AutocompleteComponent,
    OverlayNavigationComponent,
    CardOptionsComponent,
    LazyImgDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ScrollingModule,
    NzCardModule,
    SlickCarouselModule,
    NzModalModule,
    NzAutocompleteModule,
    NzInputModule,
    NzDropDownModule,
    NzMessageModule,
    ShareIconsModule,
    ShareButtonsModule,
    NzSkeletonModule,
    LayoutModule,
    NzIconModule.forRoot(icons)
  ],
  exports: [
    HeaderComponent,
    SectionMainComponent,
    CarouselComponent,
    SectionComponent,
    ImageComponent,
    CardComponent,
    FooterComponent,
    AutocompleteComponent,
    OverlayNavigationComponent,
    CardOptionsComponent
  ]
})
export class SharedModule { }
