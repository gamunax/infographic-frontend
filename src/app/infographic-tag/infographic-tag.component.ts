import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { InfographicFacade } from 'src/app/core/facades/infographic.facade';
import { InfographicNavigation, NavigationType } from 'src/app/shared/constants/close-navigation.constant';
import { Infographic } from 'src/app/shared/models/infographic';
import { PlatformBrowserService } from 'src/app/shared/services/platform-browser.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infographic-tag',
  templateUrl: './infographic-tag.component.html',
  styleUrls: ['./infographic-tag.component.scss']
})
export class InfographicTagComponent implements OnInit {
  infographicSection = [];
  searchTag;
  infographicNavigation = InfographicNavigation;
  isOpenDetail = false;
  infographicId: string;
  loading = true;

  constructor(
    private infograficFacade: InfographicFacade,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private platformBrowserService: PlatformBrowserService,
    protected $gaService: GoogleAnalyticsService,
    private loadingService: LoadingService,
    private title: Title
  ) {
    this.loadingService.isLoading.next(false);
    this.route.params.subscribe(({ tag }) => {
      this.loading = true;
      this.searchTag = tag;
      this.infographicSection = [];
      this.loadInfographics();
    });
  }

  ngOnInit(): void {
    this.title.setTitle(`Developer Infographic - ${this.searchTag}`);
    this.$gaService.pageView(
      this.searchTag,
      `/search/${this.searchTag}`
    );
  }

  loadInfographics(): void {
    this.infograficFacade.getSectionByTag(this.searchTag)
      .subscribe(res => {
        const find = res?.find(item => item[this.searchTag]);
        if (find) {
          this.infographicSection = find[this.searchTag];
        } else {
          // mensaje que no existe registros
          this.infographicSection = [];
        }
        this.loading = false;
      });
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

  closeModal(isClosed): void {
    this.isOpenDetail = !isClosed;
  }

}
