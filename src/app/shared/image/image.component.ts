import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Infographic } from '../models/infographic';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  firstImage: string;
  readonly API = environment.api;

  @Input() set data(infographic: Infographic) {
    const [{url}] = infographic?.images;
    this.firstImage = url;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
