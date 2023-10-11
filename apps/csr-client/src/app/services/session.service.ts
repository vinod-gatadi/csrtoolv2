import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
    DiscoveryService,
    DiscoveryServiceV2,
    SessionProvider,
    SessionWithApiAndLocalStorageService,
    SessionResponse,
    LoggerService,
    ConfigurationService,
    API_SESSION_PATH,
} from '@snapfish/tools-core-client';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService
  extends SessionWithApiAndLocalStorageService<LocalSessionResponse>
  implements SessionProvider
{
  constructor(
    http: HttpClient,
    config: ConfigurationService,
    discovery: DiscoveryService,
    private discoveryV2: DiscoveryServiceV2,
    storage: LocalStorage,
    @Inject(API_SESSION_PATH) apiUrl: string,
    logger: LoggerService
  ) {
    super(http, config, discovery, storage, apiUrl, logger);
  }

  public get roles(): { [context: string]: Role[] } {
    return (this.session && this.session.roles) || {};
  }

  public get workingPartner(): string | undefined {
    return this.session && this.session.user
      ? this.session.user.partner
      : undefined;
  }

  public override get partner(): string {
    return this.session ? this.session.partner : '';
  }

  public authenticate(userName: string, password: string, partner: string) {
    const payLoad = {
      userName: userName,
      password: password,
      partner: partner,
    };
    return this.http
      .post<any>(
        `${this.discoveryV2.getUrl('csrnextgen')}/authenticate`,
        payLoad
      )
      .pipe(
        catchError((error) => {
          console.log('Error while authentication...' + error);
          if (error instanceof HttpErrorResponse && error.status == 401) {
            error = 'Invalid Credentials';
          } else {
            error = error.toString();
          }
          return of({ error: error });
        })
      );
  }

  public override logout(): Observable<void> {
    // clear the localStorage - https://github.com/cyrilletuzi/angular-async-local-storage
    this.clear().subscribe(() => {});
    const url = this.discovery.getUrl('ssoportal');
    if (!this.partner) {
      window.location.href = `${url}`;
      return of(undefined);
    }
    window.location.href = `${url}/tfw/${this.partner}/logout`;
    return of(undefined);
  }

  override returnToPortal(): Observable<void> {
    const partner = this.workingPartner;
    const url = this.discoveryV2.getUrl('ssoportal', partner);
    if (!this.partner) {
      window.location.href = `${url}`;
      return of(undefined);
    }
    window.location.href = `${url}/tfw/${this.partner}`;
    return of(undefined);
  }
}

interface LocalSessionResponse extends SessionResponse {
    roles: { [context: string]: Role[] };
    user: {
        id: string;
        partner: string;
    };
}

export type Role = 'CS1' | 'CS2' | 'CS3' | 'CSR' | 'CSW' | 'CSA';
