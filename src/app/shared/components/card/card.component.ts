import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageConfig } from '../../models/image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() value;
  @Output() open = new EventEmitter();

  imageConfig: ImageConfig;
  share = false;
  isVisible: boolean;
  https = 'https://infographic.dev';

  constructor() { }

  ngOnInit(): void {
    this.imageConfig = {
      width: '260',
      height: '260',
      hasCount: true
    };
  }

  openDetail(): void {
    console.log('xxxx');
    this.open.emit(true);
  }

  visibleChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}
