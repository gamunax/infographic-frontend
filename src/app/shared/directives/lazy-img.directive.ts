import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { PlatformBrowserService } from '../services/platform-browser.service';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyImgDirective {

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(
    private el: ElementRef,
    private platformBrowserService: PlatformBrowserService
  ) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    if (this.platformBrowserService.isBrowser) {
      return window && 'IntersectionObserver' in window;
    }
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
  }
}
