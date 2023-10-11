import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiDetectionService as LocalApiDetectionService } from './api-detection.service';

import {
  ToolsCoreModule,
  AuthInterceptor,
  ApiDetectionService,
  SessionService,
  SessionWithApiAndLocalStorageService,
  API_SESSION_PATH,
} from '@snapfish/tools-core-client';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from './shared/shared.module';
import { AppLoadModule } from './app-load.module';
import { AppRoutingModule } from './app-routing.module';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [AppComponent, HealthComponent, LoginComponent, SearchComponent, ShellComponent],
  imports: [
    AppLoadModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ToolsCoreModule.forRoot()
  ],
  providers: [
    SessionWithApiAndLocalStorageService,
    {
      provide: ApiDetectionService,
      useExisting: LocalApiDetectionService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
        provide: API_SESSION_PATH,
        useValue: '/v1/orderhealth/session',
    },
    {
      provide: SessionService,
      useExisting: SessionWithApiAndLocalStorageService,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
