import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@angular/localize/init';

import { AppModule } from './app/app.module';

// Testing deployment: This comment added for CI/CD pipeline testing
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));