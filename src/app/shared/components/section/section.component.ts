import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Infographic } from '../../models/infographic';
import { NavigationType, InfographicNavigation } from '../../constants/close-navigation.constant';
import { PlatformBrowserService } from '../../services/platform-browser.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {
  @Input() data: Infographic[];
  @Input() infographicNavigation: NavigationType;

  infographics: Infographic;
  isOpenDetail = false;
  infographicId: string;

  constructor(
    private router: Router,
    private location: Location,
    private platformBrowserService: PlatformBrowserService
  ) { }

  ngOnInit(): void {
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
      this.router.navigate([`/${id}/${url}`]);
    } else {
      if (this.platformBrowserService.isBrowser) {
        this.location.go(`/${id}/${url}`);
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

  ngOnDestroy(): void {
  }
}
