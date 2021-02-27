import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { InfographicTags } from 'src/app/shared/models/infographic';
import { Tag } from 'src/app/shared/models/tag';
import { TagService } from '../services/tag.service';

@Injectable({
  providedIn: 'root'
})
export class TagFacade {
  responseCacheTag = new Map();
  cacheInfographiTag = 'infographicTag';
  tags$ = new BehaviorSubject<InfographicTags[]>([]);

  constructor(
    private tagService: TagService
  ) { }

  getTags(): Observable<InfographicTags[]> {
    return this.tagService.getTags()
      .pipe(
        tap(tags => {
          this.tags$.next(tags);
        })
      );
  }
}
