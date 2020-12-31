import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { Infographic } from '../../models/infographic';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  @Input() set data(infographic: Infographic) {
    this.infographic = infographic;
  }

  infographic: Infographic;
  datos;

  readonly API_IMAGES = environment.apiImages;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    dots: true,
    lazyLoad: 'ondemand'
  };

  slideConfig2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  trackBy(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    console.log('xxxxxxx');
    // this.slickModal.initSlick();
  }
}
