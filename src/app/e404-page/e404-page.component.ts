import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-e404-page',
    standalone: true,
    template: `
        <h1>HTTP Error <span class="text-danger">404</span> Page not found</h1>
    `,
    styles: [],
})
export class E404PageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
