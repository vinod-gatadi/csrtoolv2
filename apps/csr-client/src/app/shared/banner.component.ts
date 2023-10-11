import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tools-workspace-banner',
    template: `
        <div class="bg-primary text-white p-1">
            <div class="ml-2">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: ['.fraud: { color: #f6be1f}']
})
export class BannerComponent implements OnInit {
    constructor() {}

    @Input() fraudulent: boolean;
    ngOnInit(): void {}
}
