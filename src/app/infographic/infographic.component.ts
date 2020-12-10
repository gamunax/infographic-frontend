import { Component, OnInit } from '@angular/core';
import { InfographicService } from '../core/services/infographic.service';
import { TagService } from '../core/services/tag.service';
import { InfographicTagsId } from '../shared/constants/infographic-tag';
import { Infographic, InfographicTags } from '../shared/models/infographic';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.scss']
})
export class InfographicComponent implements OnInit {
  infographics: Infographic[];
  tags: InfographicTags[];

  INFOGRAPHIC_HOME = {
    HTML: undefined,
    CSS: undefined,
    JAVASCRIPT: undefined
  };

  constructor(
    private infographicService: InfographicService,
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.setInfographics();
    this.getTags();
  }

  setInfographics(): void {
    this.infographicService.getInfographics().subscribe((infographic: Infographic[]) => {
      this.INFOGRAPHIC_HOME = {
        HTML: this.filterInfographic(infographic, InfographicTagsId.HTML),
        CSS: this.filterInfographic(infographic, InfographicTagsId.CSS),
        JAVASCRIPT: this.filterInfographic(infographic, InfographicTagsId.JAVASCRIPT)
      };
    });
  }

  filterInfographic(data: Infographic[], id): Infographic[] {
    return data.filter(item => item.tags?.find(tag => tag?.id === id));
  }

  getTags(): void {
    this.tagService.getTags().subscribe(res => {
      console.log(res);
      this.tags = res;
    });
  }

}
