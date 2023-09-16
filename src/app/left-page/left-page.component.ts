import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-page',
    standalone: true,
    template: `
        <h1>Left Page</h1>
        <iframe
            src="https://giphy.com/embed/l1KVboXQeiaX7FHgI"
            width="480"
            height="480"
            heightBack="360"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
        ></iframe>
        <p>
            <a
                href="https://giphy.com/gifs/reactionseditor-l1KVboXQeiaX7FHgI"
                target="_blank"
            >Giphy</a>
        </p>
    `,
    styles: [],
})
export class LeftPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
