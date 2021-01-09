import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InfographicFacade } from '../../../core/facades/infographic.facade';
import { InfographicNavigation } from '../../../shared/constants/close-navigation.constant';
import { Infographic, InfographicTags } from '../../../shared/models/infographic';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.scss']
})
export class InfographicComponent implements OnInit {
  infographics: Infographic[];
  tags: InfographicTags[];
  infographicNavigation = InfographicNavigation;

  infographicSection;

  constructor(
    private infograficFacade: InfographicFacade,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Developer and Design Infographic - All infographics')
    this.loadInfographics();
  }

  loadInfographics(): void {
    this.infograficFacade.getSectionByTag()
      .subscribe(res => {
        this.infographicSection = res;
        console.log(res);
      });
  }

  filterInfographic(data: Infographic[], id): Infographic[] {
    return data.filter(item => item.tags?.find(tag => tag?.id === id));
  }

}
