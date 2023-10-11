import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolsCoreModule } from '@snapfish/tools-core-client';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgbDropdownModule, NgbNavModule, NgbProgressbarModule, NgbModalModule, NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NumericDirective } from './directives/numeric.directve';
import { FilterPipe } from './pipes/filter.pipe';
import { SafeHtmlPipe } from './pipes/safehtml.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyFormatter } from './utils/currency.formatter';
import { DateFormatter } from './utils/date.formatter';
import { JoinPipe } from './pipes/join.pipe';
import { BannerComponent } from './banner.component';

@NgModule({
    declarations: [
        NavigationComponent,
        NotfoundComponent,
        NumericDirective,
        FilterPipe,
        SafeHtmlPipe,
        JoinPipe,
        BannerComponent
    ],
    providers: [CurrencyFormatter, DateFormatter],
    imports: [CommonModule, ToolsCoreModule, RouterModule,NgbAlertModule, NgbProgressbarModule, NgbDropdownModule, NgbModalModule, NgbNavModule, FormsModule, ReactiveFormsModule],
    exports: [
        NavigationComponent,
        FilterPipe,
        JoinPipe,
        SafeHtmlPipe,
        BannerComponent,
        NgbAlertModule
    ]
})
export class SharedModule {}
