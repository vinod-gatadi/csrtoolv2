import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationEntry, ConfigurationService, Environment } from '@snapfish/tools-core-client';

@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styles: []
})
export class ShellComponent implements OnInit {
    partner: string;
    navigation: NavigationEntry[] = [
        {
            display: 'search',
            routerLinkInfo: ['search']
        }
    ];
    environment: Environment;

    constructor(private route: ActivatedRoute, private config: ConfigurationService) {}

    ngOnInit() {
        this.environment = "qa";
        this.route.paramMap.subscribe(p => {
            this.partner = p.get('partner')!;
        });
    }
}
