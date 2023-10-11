import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolsCoreModule, SessionService, SessionWithApiAndLocalStorageService, API_SESSION_PATH } from '@snapfish/tools-core-client';
import { RouterTestingModule } from '@angular/router/testing';

import { ShellComponent } from './shell.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShellComponent', () => {
    let component: ShellComponent;
    let fixture: ComponentFixture<ShellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToolsCoreModule.forRoot(), HttpClientTestingModule],
            declarations: [ShellComponent],
            providers: [
                SessionWithApiAndLocalStorageService,
                {
                    provide: SessionService,
                    useExisting: SessionWithApiAndLocalStorageService
                },
                {
                    provide: API_SESSION_PATH,
                    useValue: '/bob'
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
