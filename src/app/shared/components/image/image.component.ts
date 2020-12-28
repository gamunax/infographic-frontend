import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ImageConfig } from '../../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  firstImage: string;
  readonly API_IMAGES = environment.apiImages;

  @Input() set images(url) {
    this.firstImage = this.API_IMAGES + url;
  }
  @Input() configuration: ImageConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
