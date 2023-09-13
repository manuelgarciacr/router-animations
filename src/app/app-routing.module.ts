import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightPageComponent } from './right-page/right-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/left', pathMatch: 'full' },
    {
        path: 'left',
        component: LeftPageComponent,
        data: { animation: 'isLeft' },
    },
    { path: 'about', component: AboutPageComponent },
    {
        path: 'right',
        component: RightPageComponent,
        data: { animation: 'isRight' },
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
