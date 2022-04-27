// #docplaster
// #docregion
import { Component, Host, Optional } from '@angular/core';

import { HeroCacheService } from './hero-cache.service';
import { LoggerService } from './logger.service';

// #docregion component
@Component({
  selector: 'app-hero-contact',
  template: `
  <div>Phone #: {{phoneNumber}}
  <span *ngIf="hasLogger">!!!</span></div>`
})
export class HeroContactComponent {

  hasLogger = false;

  constructor(
  // #docregion ctor-params
      @Host() // limit to the instance of the HeroCacheService in the host component
      private heroCache: HeroCacheService,

      @Host()     // limit search for logger; hides the application-wide logger
      @Optional() // ok if the logger does not exist
      private loggerService?: LoggerService
  // #enddocregion ctor-params
  ) {
    if (loggerService) {
      this.hasLogger = true;
      loggerService.logInfo('HeroContactComponent can log!');
    }
  }

  get phoneNumber() { return this.heroCache.hero.phone; }

}
// #enddocregion component
