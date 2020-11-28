import { Component, OnInit } from '@angular/core';
import { InfographicService } from '../core/services/infographic.service';
import { InfographicTags } from '../shared/constants/infographic-tag';
import { Infographic } from '../shared/models/infographic';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.scss']
})
export class InfographicComponent implements OnInit {
  infographics: Infographic[];

  INFOGRAPHIC_HOME = {
    HTML: undefined,
    CSS: undefined,
    JAVASCRIPT: undefined
  };

  constructor(
    private infographicService: InfographicService
  ) { }

  ngOnInit(): void {
    this.setInfographics();
  }

  setInfographics(): void {
    this.infographicService.getInfographics().subscribe((infographic: Infographic[]) => {
      this.INFOGRAPHIC_HOME = {
        HTML: this.filterInfographic(infographic, InfographicTags.HTML),
        CSS: this.filterInfographic(infographic, InfographicTags.CSS),
        JAVASCRIPT: this.filterInfographic(infographic, InfographicTags.JAVASCRIPT)
      };
      console.log(this.INFOGRAPHIC_HOME);
    });
  }

  filterInfographic(data: Infographic[], id): Infographic[] {
    return data.filter(item => item.tag?.id === id);
  }

}
