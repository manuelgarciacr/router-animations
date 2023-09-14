import { Routes } from "@angular/router";

/* export const ADMIN_ROUTES: Route[] = [
    { path: '', redirectTo: '/left', pathMatch: 'full' },
    {
        path: 'left',
        component: LeftPageComponent,
        data: { animation: 'isLeft' },
    },
    { path: 'middle', component: MiddlePageComponent },
    {
        path: 'right',
        component: RightPageComponent,
        data: { animation: 'isRight' },
    },
]; */
export const ROUTES: Routes = [
    {
        path: 'left',
        loadComponent: () =>
            import('./left-page/left-page.component').then(
                (c) => c.LeftPageComponent
            ),
        data: { animation: 'isLeft' }
    },
    {
        path: 'middle',
        loadComponent: () =>
            import('./middle-page/middle-page.component').then(
                (c) => c.MiddlePageComponent
            )
    },
    {
        path: 'right',
        loadComponent: () =>
            import('./right-page/right-page.component').then(
                (c) => c.RightPageComponent
            ),
        data: { animation: 'isRight' }
    },
    { path: '', redirectTo: '/left', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () =>
            import('./e404-page/e404-page.component').then(
                (c) => c.E404PageComponent
            )
    },
];

