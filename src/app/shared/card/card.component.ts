import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { Infographic } from '../models/infographic';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  @Input() data: Infographic;

  datos;

  readonly API = environment.api;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    lazyLoad: 'ondemand'
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    /*if (this.slickModal && this.slickModal.initialized) {
      this.slickModal.unslick();
      this.slickModal.initSlick();
    }*/
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.data.firstChange) {
      console.log(changes);
      if (this.slickModal && this.slickModal.initialized) {
        this.slickModal.slickGoTo(0);
      }
    }
  }

  trackBy(index: number): number {
    return index;
  }

  ngOnDestroy() {
    this.slickModal.unslick();
    console.log('xxxxxaaaa');
  }
}
