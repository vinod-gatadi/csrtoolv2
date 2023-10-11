import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatedGuard } from '@snapfish/tools-core-client';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
    {
        path: 'health',
        component: HealthComponent,
    },
    {
        path: ':partner',
        component: ShellComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'search',
                canActivate: [AuthenticatedGuard],
                component: SearchComponent,
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'search',
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'snapfish',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
