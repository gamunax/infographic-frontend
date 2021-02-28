import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { Infographic } from '../../models/infographic';
import { NavigationType } from '../../constants/close-navigation.constant';
import { PlatformBrowserService } from '../../services/platform-browser.service';
import { BehaviorSubject } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {
  @ViewChild('scrollBar', {read: InfiniteScrollDirective}) scrollBar: InfiniteScrollDirective;

  @Input() data: Infographic[];
  @Input() infographicNavigation: NavigationType;
  @Input() page;

  @Output() pageMore = new EventEmitter<number>();

  infographics: Infographic;
  isOpenDetail = false;
  infographicId: string;
  isLoading: boolean;
  dataOriginal: Infographic[];

  constructor(
    private router: Router,
    private location: Location,
    public breakpointObserver: BreakpointObserver,
    private platformBrowserService: PlatformBrowserService
  ) {
  }

  ngOnInit(): void {
    this.detechMediaQueries();
  }

  detechMediaQueries() {
    this.dataOriginal = JSON.parse(JSON.stringify(this.data));

    this.breakpointObserver
      .observe(['(min-width: 600px) and (max-width: 991px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.data = JSON.parse(JSON.stringify(this.dataOriginal))?.map(item => {
            const [tag] = Object.keys(item);
            item[tag] = item[tag].filter((value, index) => index < 2);
            return item;
          });
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 992px) and (max-width: 1024px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.data = JSON.parse(JSON.stringify(this.dataOriginal))?.map(item => {
            const [tag] = Object.keys(item);
            item[tag] = item[tag].filter((value, index) => index < 3);
            return item;
          });
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 1025px) and (max-width: 1359px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.data = JSON.parse(JSON.stringify(this.dataOriginal))?.map(item => {
            if (item) {
              const [tag] = Object.keys(item);
              item[tag] = item[tag].filter((value, index) => index < 4);
              return item;
            }
          });
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 1360px) and (max-width: 1599px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.data = JSON.parse(JSON.stringify(this.dataOriginal))?.map(item => {
            const [tag] = Object.keys(item);
            item[tag] = item[tag].filter((value, index) => index < 5);
            return item;
          });
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 1600px) and (max-width: 1920px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.data = JSON.parse(JSON.stringify(this.dataOriginal))?.map(item => {
            const [tag] = Object.keys(item);
            item[tag] = item[tag].filter((value, index) => index < 5);
            return item;
          });
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 1921px) and (max-width: 2600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.data = JSON.parse(JSON.stringify(this.dataOriginal))?.map(item => {
            const [tag] = Object.keys(item)
            item[tag] = item[tag].filter((value, index) => index < 7);
            return item;
          });
        }
      });
  }

  resetData(): void {
    this.infographics = undefined;
  }

  openDetail(isOpen: boolean, { id, url }: Infographic, infographicNavigation: NavigationType): void {
    this.isOpenDetail = isOpen;
    this.infographicId = id;

    if (this.platformBrowserService.isBrowser) {
      if (document.getElementById('infographic-detail')) {
        document.getElementById('infographic-detail').style.width = '100%';
      }
    }
    if (infographicNavigation === NavigationType.PAGE) {
      this.router.navigate([`/detail/${id}/${url}`]);
    } else {
      if (this.platformBrowserService.isBrowser) {
        this.location.go(`/detail/${id}/${url}`);
      }
    }
  }

  handleOk(): void {
    this.isOpenDetail = false;
  }

  handleCancel(): void {
    this.resetData();
    this.isOpenDetail = false;
  }

  closeModal(isClosed): void {
    this.isOpenDetail = !isClosed;
  }

  trackByFn(index, item) {
    return index;
  }

  onScrollDown(): void {
    this.page++;
    this.pageMore.emit(this.page);
  }

  ngOnDestroy(): void {
    this.scrollBar.destroyScroller();
    this.scrollBar.setup();
  }
}
