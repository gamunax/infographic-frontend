import { Injectable } from '@angular/core';
import { InfographicService } from '../services/infographic.service';
import { TagService } from '../services/tag.service';

@Injectable({
  providedIn: 'root'
})
export class InfographicFacade {

  constructor(
    private infographicService: InfographicService,
    private tagService: TagService
  ) { }
}
