import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PlatformBrowserService } from './shared/services/platform-browser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infographic-frontend';

  constructor(
    private swUpdate: SwUpdate,
    private platformBrowserService: PlatformBrowserService
  ) {
    this.updatePWA();
  }

  updatePWA(): void{
    this.swUpdate.available.subscribe(res => {
        this.swUpdate.activateUpdate().then(() => {
          if (this.platformBrowserService.isBrowser) {
            location.reload();
          }
        });
    });
  }
}
