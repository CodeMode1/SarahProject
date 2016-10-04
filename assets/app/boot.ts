///<reference path="../../typings.d.ts"/>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app.environment';
import { AppModule } from './app.module';
if (environment.production) {
  		enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);