import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private urlMeta = "og:url";
  private titleMeta = "og:title";
  private descriptionMeta = "og:description";
  private imageMeta = "og:image";
  private siteName = 'og:site_name';

  constructor(
    private meta: Meta
  ) { }

  setGraph(url: string, title: string, description: string, image: string, siteName) {
    const tags = [
      {
        name: this.urlMeta,
        value: url,
      },
      {
        name: this.titleMeta,
        value: title
      },
      {
        name: this.descriptionMeta,
        value: description
      },
      {
        name: this.imageMeta,
        value: image
      },
      {
        name: this.siteName,
        value: siteName
      }
    ];
    this.setTags(tags);
  }

  private setTags(tags = []): void {
    tags.forEach(siteTag => {
      this.meta.updateTag({ property: siteTag.name, content: siteTag.value });
    });
  }
}
