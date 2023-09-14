import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-middle-page',
    standalone: true,
    template: `
        <h1>Middle Page</h1>
        <iframe
            src="https://giphy.com/embed/l1IBhVOvoHBF1p4kM"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
        ></iframe>
        <p>
            <a href="https://giphy.com/gifs/fish-l1IBhVOvoHBF1p4kM" target="_blank">Giphy</a>
        </p>
    `,
    styles: [],
})
export class MiddlePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
