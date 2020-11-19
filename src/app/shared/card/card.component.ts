import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "infinite": false
  };

  constructor() { }

  ngOnInit(): void {
  }

  addSlide(): void {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide(): void {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e): void {
    console.log('slick initialized');
  }

  breakpoint(e): void {
    console.log('breakpoint');
  }

  afterChange(e): void {
    console.log('afterChange');
  }

  beforeChange(e): void {
    console.log('beforeChange');
  }

}
