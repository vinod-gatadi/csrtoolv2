import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SessionWithApiAndLocalStorageService, ConfigurationService, ToolsCoreModule, DiscoveryServiceV2 } from '@snapfish/tools-core-client';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule, NgbProgressbarModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { FileDropDirective } from 'ng2-file-upload';

import { SearchComponent } from './search.component';
import { MockComponents } from 'ng-mocks';
import { SourceGroupDisplayComponent } from '../source-group-display/source-group-display.component';
import { LineItemDisplayComponent } from '../line-item-display/line-item-display.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule,
                ClipboardModule,
                HighlightModule,
                HttpClientTestingModule,
                FontAwesomeModule,
                ToastrModule.forRoot(),
                NgbTooltipModule,
                NgbProgressbarModule,
                NgbTypeaheadModule,
                ToolsCoreModule,
            ],
            declarations: [
                SearchComponent,
                FileDropDirective,
                MockComponents(SourceGroupDisplayComponent, LineItemDisplayComponent),
            ],
            providers: [SessionWithApiAndLocalStorageService, ConfigurationService, DiscoveryServiceV2],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
