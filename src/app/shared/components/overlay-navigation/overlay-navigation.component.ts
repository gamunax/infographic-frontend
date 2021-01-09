import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InfographicFacade } from 'src/app/core/facades/infographic.facade';
import { InfographicNavigation, NavigationType } from 'src/app/shared/constants/close-navigation.constant';
import { Infographic } from 'src/app/shared/models/infographic';
import { PlatformBrowserService } from '../../services/platform-browser.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private infographicFacade: InfographicFacade,
    private platformBrowserService: PlatformBrowserService
  ) {
    this.route.params.subscribe(({id}) => {
      this.infographicId = id;
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.platformBrowserService.isBrowser) {
      document.getElementById('infographic-detail').style.display = 'block';
    }
    this.infographicFacade.getInfographicById(this.infographicId || this.id)
      .subscribe(res => {
        this.infographic = JSON.parse(JSON.stringify(res));
      });
  }

  close(infographicNavigation: NavigationType): void {
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
  }

}
