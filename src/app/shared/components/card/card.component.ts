import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ImageConfig } from '../../models/image';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Title } from '@angular/platform-browser';
import { PlatformBrowserService } from '../../services/platform-browser.service';

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
    private message: NzMessageService,
    private title: Title,
    private platformBrowserService: PlatformBrowserService
  ) { }

  ngOnInit(): void {
    // this.title.setTitle(`'Developer and Design Infographic - ${this.value?.title}`)
    this.imageConfig = {
      width: '260',
      height: '260',
      hasCount: true
    };
  }

  openDetail(): void {
    this.open.emit(true);
  }

  visibleChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  focus(target): void {
    target.select();
    target.setSelectionRange(0, 99999);
  }

  copy(url: string): void {
    this.inputCopy.nativeElement.select();
    this.inputCopy.nativeElement.setSelectionRange(0, 99999);
    if (this.platformBrowserService.isBrowser) {
      document.execCommand('copy');
    }
    // this.message.create('success', `This is a message of`);
    this.message.success('Link copied', {
      nzDuration: 1500
    });
  }

}
