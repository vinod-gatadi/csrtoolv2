import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscoveryServiceV2 } from '@snapfish/tools-core-client';
import { SessionService } from '../services/session.service';
import { filter } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
})
export class LoginComponent implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute, private sessionService: SessionService, private router: Router, private discoveryV2: DiscoveryServiceV2) {}

    ngOnInit() {
        this.route.queryParamMap.pipe(filter(params => !!params.get('token'))).subscribe(async params => {
            const token = params.get('token')!;
            await this.sessionService.initialize(token, 'csrnextgen');
            // combineLatest([
            //     this.securityService.getAvailableRoles(),
            //     this.skuService.getAllSkusForUserContexts(),
            //     this.skuService.getAllSkusOptionsForUserContexts()
            // ]).subscribe();
            this.router.navigate(['../home'], { relativeTo: this.route, replaceUrl: true });
        });
    }

    ngOnDestroy() {}
}
