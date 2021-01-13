import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InfographicFacade } from 'src/app/core/facades/infographic.facade';
import { InfographicNavigation, NavigationType } from 'src/app/shared/constants/close-navigation.constant';
import { Infographic } from 'src/app/shared/models/infographic';
import { PlatformBrowserService } from '../../services/platform-browser.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CardConfiguration } from '../../models/card-configuration.model';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-overlay-navigation',
  templateUrl: './overlay-navigation.component.html',
  styleUrls: ['./overlay-navigation.component.scss']
})
export class OverlayNavigationComponent implements OnInit, OnChanges, OnDestroy {

  @Input() infographicNavigation: NavigationType;
  @Input() id: string;

  @Output() closeModal = new EventEmitter();

  infographicId: string;
  infographic: Infographic;
  https = 'https://infographic.dev';
  configuration: CardConfiguration = {
    background: '#0D1524',
    justifyContent: 'flex-end',
    marginLeftButton: 36
  };

  configurationDesktop: CardConfiguration = {
    background: '#0D1524',
    justifyContent: 'flex-start',
    marginLeftButton: 36
  };

  private unsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private infographicFacade: InfographicFacade,
    private platformBrowserService: PlatformBrowserService,
    protected $gaService: GoogleAnalyticsService
  ) {
    this.route.params.subscribe(({ id }) => {
      this.infographicId = id;
    });
  }

  ngOnInit(): void {
    fromEvent(window, 'popstate')
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((e) => {
      if (this.platformBrowserService.isBrowser) {
        document.getElementById('infographic-detail').style.display = 'none';
        document.body.style.overflow = 'auto';
        this.closeModal.emit(true);
        this.infographic = null;
      }
    });
  }

  ngOnChanges(): void {
    if (this.platformBrowserService.isBrowser) {
      document.getElementById('infographic-detail').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    this.infographicFacade.getInfographicById(this.infographicId || this.id)
      .subscribe(res => {
        this.infographic = JSON.parse(JSON.stringify(res));
        this.$gaService.pageView(
          this.infographic?.title,
          `/${this.infographic?.url}`
        );
      });
  }

  close(infographicNavigation: NavigationType): void {
    if (this.platformBrowserService.isBrowser) {
      document.body.style.overflow = 'auto';
    }
    this.closeModal.emit(true);
    if (infographicNavigation === InfographicNavigation.PAGE) {
      this.router.navigate(['/']);
    } else {
      if (this.platformBrowserService.isBrowser) {
        document.getElementById('infographic-detail').style.display = 'none';
      }
      this.location.go(`/`);
      this.infographic = null;
    }
  }


  ngOnDestroy(): void {
    this.infographic = null;
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
