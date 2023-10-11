import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService, DiscoveryService, DiscoveryServiceV2 } from '@snapfish/tools-core-client';
import { SessionService } from './services/session.service';

export function initializeConfig(
    configService: ConfigurationService,
    discovery: DiscoveryService,
    discoveryV2: DiscoveryServiceV2,
    session: SessionService
) {
    return async () => {
        await configService.initialize('assets/config.json');
        await discovery.initialize(configService.discoveryUrl, [
          'accounts',
          'csrnextgen',
          'ecommerce',
          'pict',
          'thumbnailer',
          'ssoportal'
        ]);
        await discoveryV2.initialize(configService.discoveryUrl, ['ssoportal', 'ssoapi','csrnextgen']);
        await session.initialize(undefined, 'csrnextgen');
    };
}

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeConfig,
            deps: [ConfigurationService, DiscoveryService, DiscoveryServiceV2, SessionService],
            multi: true,
        },
    ],
})
export class AppLoadModule {}
