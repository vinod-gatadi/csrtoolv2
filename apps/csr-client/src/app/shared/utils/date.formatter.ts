import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

const timeZonMappings = new Map<string, string>([
    ['/hp/sf/sf-us/snapfish-us', 'PST'],
    ['/hp/sf/sf-uk/snapfish-uk', 'GMT'],
    ['/hp/sf/sf-uk/truprint-uk', 'AEST'],
    ['/hp/sf/sf-uk/boots', 'GMT'],
    ['/hp/sf/sf-uk/virginmedia-uk', 'GMT'],
    ['/hp/sf/sf-uk/hipp-uk', 'GMT'],
    ['/hp/sf/snapfish_at/snapfishat', 'CET'],
    ['/hp/sf/snapfish_au/snapfishau', 'AEST'],
    ['/hp/sf/snapfish_au/kmart-au', 'AEST'],
    ['/hp/sf/snapfish_au/huggies-au', 'AEST'],
    ['/hp/sf/snapfish_de/snapfishde', 'CET'],
    ['/hp/sf/snapfish_fr/snapfishfr', 'CET'],
    ['/hp/sf/snapfish_ie/snapfishie', 'GMT'],
    ['/hp/sf/snapfish_ie/eumom', 'GMT'],
    ['/hp/sf/snapfish_ie/bootsroi', 'GMT'],
    ['/hp/sf/snapfish_it/snapfishit', 'CEST'],
    ['/hp/sf/snapfish_it/carrefour', 'CEST'],
    ['/hp/sf/snapfish_it/trony', 'CEST'],
    ['/hp/sf/snapfish_nz/snapfishnz', 'NZST'],
    ['/hp/sf/snapfish_nz/huggies-nz', 'NZST'],
    ['/walgreens/wg/wg-us/walgreens-us', 'PST'],
    ['/cvs/cvs-photo/cvs-us/cvs-photo-us', 'PST'],
    ['/amazon/printing/us/default', 'PST'],
]);


@Injectable({
    providedIn: 'root'
})
export class DateFormatter {
    constructor() {}

    getLocaleDate(context: string, date: string) {
        return date;
    }

    getTimeZone(context: string) {
        if (context !== null) {
            return timeZonMappings.get(context);
        }
    }
    
    simpleFormatDate(date: any){
        return formatDate(date, 'EEE, MMM dd, yyyy', 'en_GB', '+0000');
    }
}

