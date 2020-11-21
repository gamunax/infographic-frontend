import { Component, Input, OnInit } from '@angular/core';

import { Infographic } from '../models/infographic';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: Infographic;

  readonly API = environment.api;

  /*slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];*/

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
  }
}
