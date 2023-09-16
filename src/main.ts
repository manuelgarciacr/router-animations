/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/routes';
import { environment } from './environments/environment';
//import { provideRouter } from '@angular/router';

/* import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

/* const routes: Routes = [
    {
        path: 'left',
        loadComponent: () =>
            import('./app/left-page/left-page.component').then(
                (c) => c.LeftPageComponent
            ),
    },
    {
        path: 'middle',
        loadComponent: () =>
            import('./app/middle-page/middle-page.component').then(
                (c) => c.MiddlePageComponent
            ),
    },
    {
        path: 'right',
        loadComponent: () =>
            import('./app/right-page/right-page.component').then(
                (c) => c.RightPageComponent
            ),
    },
    { path: '', redirectTo: '/left', pathMatch: 'full' }
]; */

if (environment.production) {
    enableProdMode()
}

bootstrapApplication(AppComponent, {
    providers: [provideRouter(ROUTES), provideAnimations()],
}).catch((err) => console.error(err));
