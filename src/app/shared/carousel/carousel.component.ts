import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { Infographic } from '../models/infographic';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  @Input() data: Infographic;

  datos;

  readonly API_IMAGES = environment.apiImages;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    lazyLoad: 'ondemand'
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
  }
}
