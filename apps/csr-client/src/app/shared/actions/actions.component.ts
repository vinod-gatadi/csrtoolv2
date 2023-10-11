import { Component, Input, OnInit } from '@angular/core';
import { Action, RolesAndPermissions } from '@tools-workspace/definitions';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SecurityService } from '../../services/security.service';

@Component({
    selector: 'tools-workspace-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent implements OnInit {
    @Input() set actions(actions: ActionCommand[]) {
        this.actions$ = of(actions);
    }
    @Input() set actions$(acts: Observable<ActionCommand[]>) {
        this._actions = acts;
    }
    _actions: Observable<ActionCommand[]>;
    availableRoles: RolesAndPermissions;
    actionFilter = (command: ActionCommand) => {
        const { canDisplay, action, actionContext } = command;
        const context = actionContext ? actionContext() : null;
        if (canDisplay) {
            if (!canDisplay()) {
                return false;
            }
        }
        if (!action) {
            return true;
        }
        return this.securityService.authorize2(action, this.availableRoles, context);
    };

    get actions$() {
        return this._actions.pipe(map(actions => actions.filter(this.actionFilter)));
    }
    ngOnInit() {
        this.securityService.getAvailableRoles().subscribe(roles => (this.availableRoles = roles));
    }
    async invokeAction(action: ActionCommand) {
        await Promise.resolve(action.execute());
    }
    constructor(private securityService: SecurityService) {}
}
export interface ActionCommand {
    display: string;
    execute: () => Promise<void>;
    action?: Action;
    actionContext?: any;
    canDisplay?: () => boolean;
}
