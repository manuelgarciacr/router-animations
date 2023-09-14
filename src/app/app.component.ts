import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, RouterOutlet } from '@angular/router';
//import { MiddlePageComponent } from './middle-page/middle-page.component';
//import { LeftPageComponent } from './left-page/left-page.component';
//import { RightPageComponent } from './right-page/right-page.component';
//import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { fader, fade, scaleFade, slider } from './route-animations';
//import { E404PageComponent } from './e404-page/e404-page.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppRoutingModule } from './app-routing.module';

@Component({
    selector: 'app-root',
    imports: [
        //CommonModule,
        //AppRoutingModule,
        //RouterOutlet,
        RouterModule, // Adds directives and providers for in-app navigation among views
        NgbModule, // ng-bootstrap
        //BrowserAnimationsModule,
        //LeftPageComponent,
        //MiddlePageComponent,
        //RightPageComponent,
        //E404PageComponent,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    animations: [slider]
})
export class AppComponent {
    title = 'Router animations';
    isMenuCollapsed = true;

    constructor(private contexts: ChildrenOutletContexts) {}

    getRouteAnimationData(outlet: RouterOutlet) {
        // We can have more than one outlet. Getting the primary or named outlet.
        // return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
        //     'animation'
        // ];

        // We can get the outlet by parm
        return outlet?.activatedRouteData?.['animation']
    }
}
