import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/models/tag';
import { TagService } from '../services/tag.service';

@Injectable({
  providedIn: 'root'
})
export class TagFacade {

  constructor(
    private tagService: TagService
  ) { }

  getTags(): Observable<Tag[]> {
      return this.tagService.getTags();
  }
}
