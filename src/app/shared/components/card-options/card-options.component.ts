import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ShareService } from '../../services/share.service';
import { PlatformBrowserService } from '../../services/platform-browser.service';
import { environment } from 'src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CardConfiguration } from '../../models/card-configuration.model';

@Component({
  selector: 'app-card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.scss']
})
export class CardOptionsComponent implements OnInit {
  @ViewChild('inputCopy') inputCopy: ElementRef;
  @Input() data;
  @Input() value;
  @Input() configuration: CardConfiguration;

  isVisible: boolean;
  https = 'https://infographic.dev';
  readonly API_IMAGES = environment.apiImages;
  isShare = false;


  constructor(
    private message: NzMessageService,
    private title: Title,
    private shareService: ShareService,
    private platformBrowserService: PlatformBrowserService
  ) { }

  ngOnInit(): void {
  }

  visibleChange(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  openShare(isOpen): void {
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

  share(): void {
    this.title.setTitle(`Developer and Design Infographic - ${this.value?.title}`);
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
