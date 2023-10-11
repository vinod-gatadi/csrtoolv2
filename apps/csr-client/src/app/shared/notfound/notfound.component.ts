import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute, private session: SessionService) {}

    async ngOnInit() {
        const partner = this.session.partner;
        this.router.navigate([partner, 'home']);
    }
}
