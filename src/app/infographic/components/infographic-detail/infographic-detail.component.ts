import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InfographicFacade } from 'src/app/core/facades/infographic.facade';
import { Infographic } from 'src/app/shared/models/infographic';

import { InfographicNavigation } from '../../../shared/constants/close-navigation.constant';

@Component({
  selector: 'app-infographic-detail',
  templateUrl: './infographic-detail.component.html',
  styleUrls: ['./infographic-detail.component.scss']
})
export class InfographicDetailComponent implements OnInit {
  infographicNavigation = InfographicNavigation;
  infographicId: string;
  infographic: Infographic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infographicFacade: InfographicFacade,
    private location: Location
  ) {
   /* this.route.params.subscribe(({id}) => {
      this.infographicId = id;
    });*/
  }

  ngOnInit(): void {
    /*document.getElementById('infographic-detail').style.width = '100%';
    this.infographicFacade.getInfographicById(this.infographicId)
      .subscribe(res => {
        this.infographic = res;
      });*/
  }

  /*close(): void {
    this.router.navigate(['/']);
    return false;
    // this.location.back();
  }*/

}
