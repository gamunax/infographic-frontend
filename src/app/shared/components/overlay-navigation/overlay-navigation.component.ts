import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfographicFacade } from 'src/app/core/facades/infographic.facade';
import { InfographicNavigation, NavigationType } from 'src/app/shared/constants/close-navigation.constant';
import { Infographic } from 'src/app/shared/models/infographic';

@Component({
  selector: 'app-overlay-navigation',
  templateUrl: './overlay-navigation.component.html',
  styleUrls: ['./overlay-navigation.component.scss']
})
export class OverlayNavigationComponent implements OnInit, OnChanges, OnDestroy {

  @Input() infographicNavigation: NavigationType;
  @Input() id: string;

  infographicId: string;
  infographic: Infographic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infographicFacade: InfographicFacade
  ) {
    this.route.params.subscribe(({id}) => {
      this.infographicId = id;
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    document.getElementById('infographic-detail').style.display = 'block';
    this.infographicFacade.getInfographicById(this.infographicId || this.id)
      .subscribe(res => {
        this.infographic = JSON.parse(JSON.stringify(res));
      });
  }

  close(infographicNavigation: NavigationType): void {
    if (infographicNavigation === InfographicNavigation.PAGE) {
      this.router.navigate(['/']);
    } else {
      document.getElementById('infographic-detail').style.display = 'none';
      this.infographic = null;
    }
  }

  ngOnDestroy(): void {
    this.infographic = null;
  }

}
