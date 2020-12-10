import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  firstImage: string;
  readonly API_IMAGES = environment.apiImages;

  @Input() set images(data) {
    const [{url}] = data?.images;
    this.firstImage = this.API_IMAGES + url;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
