import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
    SessionWithApiAndLocalStorageService,
    ConfigurationService,
    DiscoveryService,
    DiscoveryServiceV2,
    API_SESSION_PATH,
    LoggerService,
} from '@snapfish/tools-core-client';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [LoginComponent],
            providers: [
                SessionWithApiAndLocalStorageService,
                ConfigurationService,
                DiscoveryService,
                DiscoveryServiceV2,
                LoggerService,
                {
                    provide: API_SESSION_PATH,
                    useValue: '/bob',
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
