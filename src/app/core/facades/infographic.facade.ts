import { Injectable } from '@angular/core';
import { InfographicService } from '../services/infographic.service';

import { map, mergeMap } from 'rxjs/operators';
import { Tag } from 'src/app/shared/models/tag';
import { Infographic } from 'src/app/shared/models/infographic';
import { Observable, of } from 'rxjs';
import { TagFacade } from './tag.facade';

@Injectable({
  providedIn: 'root'
})
export class InfographicFacade {
  responseCache = new Map();
  responseCacheTag = new Map();
  cacheMainInfographic = 'mainInfographic';
  cacheInfographiTag = 'infographicTag';

  constructor(
    private infographicService: InfographicService,
    private tagFacade: TagFacade
  ) { }

  getSectionByTagMain(): Observable<any> {
    const mainInfographics = this.responseCache.get(this.cacheMainInfographic);
    if (mainInfographics) {
      return of(mainInfographics);
    }

    return this.tagFacade.getTags()
      .pipe(
        mergeMap((tags: Tag[]) => {
          return this.infographicService.getInfographicsMain()
            .pipe(
              map((infographics: Infographic[]) => {
                const result = tags
                  .sort((a, b) => (Number(a.order) - Number(b.order)))
                  .map((item: Tag) => {
                    const filter = infographics
                      .filter(infographic => this.searchTag(infographic?.tags, item?.id));
                    return filter?.length > 0 && { [item?.name]: filter };
                  }).filter(item => item);
                this.responseCache.set(this.cacheMainInfographic, result)
                return result;
              })
            );
        })
      );
  }

  getSectionByTag(tagName: string): Observable<any> {
    const infographicsTags = this.responseCacheTag.get(tagName);
    if (infographicsTags) {
      return of(infographicsTags);
    }

    return this.tagFacade.getTags()
      .pipe(
        mergeMap((tags: Tag[]) => {
          const idTag = tags.find(tag => tag?.name === tagName);
          return this.infographicService.getInfographicsByTag(idTag?.id)
            .pipe(
              map((infographics: Infographic[]) => {
                const result = tags.map((item: Tag) => {
                  const filter = infographics
                    .filter(infographic => this.searchTag(infographic?.tags, item?.id));
                  return filter?.length > 0 && { [item?.name]: filter };
                }).filter(item => item)
                  .sort((a, b) => (Number(a.order) - Number(b.order)));

                this.responseCacheTag.set(tagName, result);
                return result;
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
