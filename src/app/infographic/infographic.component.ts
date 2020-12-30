import { Component, OnInit } from '@angular/core';
import { InfographicFacade } from '../core/facades/infographic.facade';
import { InfographicService } from '../core/services/infographic.service';
import { TagService } from '../core/services/tag.service';
import { InfographicTagsId } from '../shared/constants/infographic-tag';
import { Infographic, InfographicTags } from '../shared/models/infographic';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.scss']
})
export class InfographicComponent implements OnInit {
  infographics: Infographic[];
  tags: InfographicTags[];

  infographicSection;

  constructor(
    private infographicService: InfographicService,
    private tagService: TagService,
    private infograficFacade: InfographicFacade
  ) { }

  ngOnInit(): void {
    this.loadInfographics();
    this.loadInfographics();
  }

  loadInfographics(): void {
    this.infograficFacade.getSectionByTag()
      .subscribe(res => {
        this.infographicSection = res;
      });
  }

  filterInfographic(data: Infographic[], id): Infographic[] {
    return data.filter(item => item.tags?.find(tag => tag?.id === id));
  }

}
