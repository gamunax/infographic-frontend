import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagFacade } from 'src/app/core/facades/tag.facade';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSearch = false;
  tags: Tag[];

  constructor(
    private tagFacade: TagFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTag();
  }

  getTag() {
    this.tagFacade.getTags().subscribe(tags => this.tags = tags)
  }

  search(value: string) {
    if (value) {
      this.router.navigate([`/search/${value}`]);
    }
  }

  clear(isClear: boolean) {
    console.log(isClear);
    this.router.navigate(['/']);
  }

}
