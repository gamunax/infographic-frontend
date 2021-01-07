import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { InfographicFacade } from 'src/app/core/facades/infographic.facade';
import { InfographicNavigation, NavigationType } from 'src/app/shared/constants/close-navigation.constant';
import { Infographic } from 'src/app/shared/models/infographic';

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

  constructor(
    private infograficFacade: InfographicFacade,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.route.params.subscribe(({ tag }) => {
      this.searchTag = tag;
      console.log(tag);
      this.loadInfographics();
    });
  }

  ngOnInit(): void {
    this.loadInfographics();
  }

  loadInfographics(): void {
    this.infograficFacade.getSectionByTag()
      .subscribe(res => {
        const find = res?.find(item => item[this.searchTag]);
        if (find) {
          this.infographicSection = find[this.searchTag];
        } else {
          // mensaje que no existe registros
          this.infographicSection = [];
        }
        console.log(this.infographicSection);
      });
  }

  openDetail({ id, url }: Infographic, infographicNavigation: NavigationType): void {
    this.isOpenDetail = true;
    this.infographicId = id;
    if (document.getElementById('infographic-detail')) {
      document.getElementById('infographic-detail').style.width = '100%';
    }
    if (infographicNavigation === NavigationType.PAGE) {
      this.router.navigate([`/${id}/${url}`]);
    } else {
      this.location.go(`/${id}/${url}`);
    }
  }

  closeModal(isClosed): void {
    this.isOpenDetail = !isClosed;
  }

}
