import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './health.component.html'
})
export class HealthComponent implements OnInit {
    constructor() {}
    public ngOnInit() {
        console.log('App Loaded....');
    }
}
