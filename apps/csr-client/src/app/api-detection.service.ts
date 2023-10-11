import { Injectable } from '@angular/core';
import { DiscoveryServiceV2 } from '@snapfish/tools-core-client';
@Injectable({
    providedIn: 'root',
})
export class ApiDetectionService {
    constructor(private discoveryV2: DiscoveryServiceV2) {}
    isApiUrl(url: string): boolean {
        return true;
    }
}