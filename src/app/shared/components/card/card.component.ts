import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ImageConfig } from '../../models/image';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('inputCopy') inputCopy: ElementRef;

  @Input() data;
  @Input() value;
  @Output() open = new EventEmitter();

  imageConfig: ImageConfig;
  share = false;
  isVisible: boolean;
  https = 'https://infographic.dev';

  constructor(
    private message: NzMessageService
  ) { }

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

  focus(target): void {
    console.log(target);
    target.select();
    target.setSelectionRange(0, 99999);
  }

  copy(url: string): void {
    console.log(this.inputCopy);
    this.inputCopy.nativeElement.select();
    this.inputCopy.nativeElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // this.message.create('success', `This is a message of`);
    this.message.success('Link copied', {
      nzDuration: 1500
    });
  }

}
