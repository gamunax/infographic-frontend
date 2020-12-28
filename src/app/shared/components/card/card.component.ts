import { Component, Input, OnInit } from '@angular/core';
import { ImageConfig } from '../../models/image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data;

  imageConfig: ImageConfig;

  constructor() { }

  ngOnInit(): void {
    this.imageConfig = {
      width: '260',
      height: '260',
      hasCount: true
    };
  }

}
