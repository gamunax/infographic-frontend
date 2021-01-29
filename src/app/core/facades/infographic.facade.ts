import { Injectable } from '@angular/core';
import { InfographicService } from '../services/infographic.service';

import { map, mergeMap } from 'rxjs/operators';
import { Tag } from 'src/app/shared/models/tag';
import { Infographic } from 'src/app/shared/models/infographic';
import { Observable } from 'rxjs';
import { TagFacade } from './tag.facade';

@Injectable({
  providedIn: 'root'
})
export class InfographicFacade {

  constructor(
    private infographicService: InfographicService,
    private tagFacade: TagFacade
  ) { }

  getSectionByTagMain(): Observable<any> {
    return this.tagFacade.getTags()
      .pipe(
        mergeMap((tags: Tag[]) => {
          return this.infographicService.getInfographicsMain()
            .pipe(
              map((infographics: Infographic[]) => {
               return tags
                .sort((a, b) => (Number(a.order) - Number(b.order)))
                .map((item: Tag) => {
                  const filter = infographics
                    .filter(infographic => this.searchTag(infographic?.tags, item?.id));
                  return filter?.length > 0 && { [item?.name]: filter };
                }).filter(item => item);
              })
            );
        })
      );
  }

  getSectionByTag(tagName: string): Observable<any> {
    console.log(tagName);
    return this.tagFacade.getTags()
      .pipe(
        mergeMap((tags: Tag[]) => {
          console.log(tags);
          const idTag = tags.find(tag => tag?.name === tagName);
          console.log(idTag);
          return this.infographicService.getInfographicsByTag(idTag?.id)
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

  getInfographicById(id: string): Observable<Infographic> {
    return this.infographicService.getInfographicById(id);
  }
}
