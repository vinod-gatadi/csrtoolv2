import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    @Input() activeTab;
    @Input() accountId?;
    @Input() shipBinId?;
    tabs: { display: string; loading$: BehaviorSubject<boolean>; notifications$: BehaviorSubject<0> }[];
    constructor() {}

    ngOnInit(): void {
        // this.tabs = this.navigationService.loadableEntries.map(({ entry }) => ({
        //     display: entry.display,
        //     loading$: entry.loading$,
        //     notifications$: entry.count$
        // }));
    }
}
