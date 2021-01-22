import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ImageConfig } from '../../models/image';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Meta, Title } from '@angular/platform-browser';
import { PlatformBrowserService } from '../../services/platform-browser.service';
import { environment } from 'src/environments/environment';
import { ShareService } from '../../services/share.service';
import { CardConfiguration } from '../../models/card-configuration.model';

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
  isShare = false;
  isVisible: boolean;
  https = 'https://infographic.dev';
  readonly API_IMAGES = environment.apiImages;
  configuration: CardConfiguration = {
    background: '#151D2F',
    justifyContent: 'flex-end',
    marginLeftButton: 0,
    isPrincipal: true
  };

  constructor(
    private message: NzMessageService,
    private title: Title,
    private platformBrowserService: PlatformBrowserService,
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
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
    this.message.success('Link copied', {
      nzDuration: 1500
    });
  }

  openShare(isOpen): void {
  }

  share(): void {
    // this.title.setTitle(`Developer and Design Infographic - ${this.value?.title}`);
    this.shareService.setGraph(
      this.https + '/' + this.value?.id + '/' + this.value?.url,
      this.value?.title,
      this.value?.title,
      this.API_IMAGES + this.value?.url,
      this.https
    );
    this.isShare = !this.isShare;
  }

}
