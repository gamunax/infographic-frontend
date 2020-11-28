import { Component, OnInit } from '@angular/core';

import { TagService } from '../../core/services/tag.service';
import { Tag } from '../../shared/models/tag';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {

  tags: Tag[];
  readonly API = environment.api;

  constructor(
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tag: Tag[]) => {
      this.tags = tag.sort((a, b) => a.order - b.order);
    });
  }
}
