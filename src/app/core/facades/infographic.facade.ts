import { Injectable } from '@angular/core';
import { InfographicService } from '../services/infographic.service';
import { TagService } from '../services/tag.service';

import { map, mergeMap } from 'rxjs/operators';
import { Tag } from 'src/app/shared/models/tag';
import { Infographic } from 'src/app/shared/models/infographic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfographicFacade {

  constructor(
    private infographicService: InfographicService,
    private tagService: TagService
  ) { }

  getSectionByTag(): Observable<any> {
    return this.tagService.getTags()
      .pipe(
        mergeMap((tags: Tag[]) => {
          return this.infographicService.getInfographics()
            .pipe(
              map((infographics: Infographic[]) => {
                return tags.map((item: Tag) => {
                  const filter = infographics
                    .filter(infographic => this.searchTag(infographic?.tags, item?.id));
                  return filter?.length > 0 && { [item?.name]: filter };
                }).filter(item => item)
                  .sort((a, b) => (Number(a.order) - Number(b.order)));
              })
            );
        })
      );
  }

  searchTag(tags, id: string): boolean {
    return tags.some(tag => tag.id === id);
  }
}
