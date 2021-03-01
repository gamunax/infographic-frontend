import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TagFacade } from 'src/app/core/facades/tag.facade';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { InfographicFacade } from '../../../core/facades/infographic.facade';
import { InfographicNavigation } from '../../../shared/constants/close-navigation.constant';
import { Infographic, InfographicTags } from '../../../shared/models/infographic';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.scss']
})
export class InfographicComponent implements OnInit, OnDestroy {
  infographics: Infographic[];
  tags: InfographicTags[];
  infographicNavigation = InfographicNavigation;
  infographicSection = [];
  isLoading = true;
  page = 0;
  private unsubscribe$ = new Subject<void>();

  skeletonSection = Array(2);
  skeletonData = Array(10);
  skeletonTag = Array(1);

  constructor(
    private infograficFacade: InfographicFacade,
    private loadingService: LoadingService,
    private tagFacade: TagFacade,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Developer and Design Infographic - All infographics')
    this.loadTags();
  }

  loadTags(): void {
    this.tagFacade.tags$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(values => values.length > 0)
      ).subscribe(tags => {
        this.tags = tags;
        this.loadInfographics(this.tags);
      });
  }

  loadInfographics(tags: InfographicTags[], page = 0): void {
    this.infograficFacade.getSectionByTagMain(tags, page)
      .subscribe(res => {
        this.isLoading = false;
        this.infographicSection = [...this.infographicSection, ...res];
        this.loadingService.isLoading.next(false);
      });
  }

  filterInfographic(data: Infographic[], id): Infographic[] {
    return data.filter(item => item.tags?.find(tag => tag?.id === id));
  }

  onScrollDown(page: number): void {
    this.page = page;
    this.loadInfographics(this.tags, page);
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
