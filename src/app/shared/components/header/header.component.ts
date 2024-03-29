import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TagFacade } from 'src/app/core/facades/tag.facade';
import { InfographicTags } from '../../models/infographic';
import { Tag } from '../../models/tag';
import { LoadingService } from '../../services/loading.service';
import { PlatformBrowserService } from '../../services/platform-browser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSearch = false;
  tags: InfographicTags[];
  isLoading = true;
  private unsubscribe = new Subject<void>();

  constructor(
    private tagFacade: TagFacade,
    private router: Router,
    private loadingService: LoadingService,
    private platformBrowserService: PlatformBrowserService
  ) { }

  ngOnInit(): void {
    this.getTag();
    // this.loadingSkeleton();
  }

  getTag(): void {
    this.tagFacade.getTags().subscribe(tags => {
      this.tags = tags
    });
  }

  // loadingSkeleton(): void {
  //   console.log(this.isLoading);
  //   this.loadingService.isLoading
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(loading => {
  //       this.isLoading = loading;
  //       if (this.platformBrowserService.isBrowser) {
  //         document.body.style.background = '#0D1524';
  //       }
  //     });
  // }

  search(value: string | any): void {
    const searchTag = value?.target?.value || value;
    if (searchTag) {
      this.router.navigate([`/search/${searchTag}`]);
    }
  }

  clear(isClear: boolean): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
