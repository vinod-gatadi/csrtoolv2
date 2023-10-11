import { Injectable } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

const currencyCodes = new Map<string, string>([
    ['/hp/sf/sf-us/snapfish-us', 'USD'],
    ['/hp/sf/sf-uk/snapfish-uk', 'GBP'],
    ['/hp/sf/sf-uk/truprint-uk', 'GBP'],
    ['/hp/sf/sf-uk/boots', 'GBP'],
    ['/hp/sf/sf-uk/virginmedia-uk', 'GBP'],
    ['/hp/sf/sf-uk/hipp-uk', 'GBP'],
    ['/hp/sf/snapfish_at/snapfishat', 'EUR'],
    ['/hp/sf/snapfish_au/snapfishau', 'USD'],
    ['/hp/sf/snapfish_au/kmart-au', 'USD'],
    ['/hp/sf/snapfish_au/huggies-au', 'USD'],
    ['/hp/sf/snapfish_de/snapfishde', 'EUR'],
    ['/hp/sf/snapfish_fr/snapfishfr', 'EUR'],
    ['/hp/sf/snapfish_ie/snapfishie', 'EUR'],
    ['/hp/sf/snapfish_ie/eumom', 'EUR'],
    ['/hp/sf/snapfish_ie/bootsroi', 'EUR'],
    ['/hp/sf/snapfish_it/snapfishit', 'EUR'],
    ['/hp/sf/snapfish_it/carrefour', 'EUR'],
    ['/hp/sf/snapfish_it/trony', 'EUR'],
    ['/hp/sf/snapfish_nz/snapfishnz', 'USD'],
    ['/hp/sf/snapfish_nz/huggies-nz', 'USD'],
    ['/walgreens/wg/wg-us/walgreens-us', 'USD'],
    ['/cvs/cvs-photo/cvs-us/cvs-photo-us', 'USD'],
    ['/amazon/printing/us/default', 'USD']
]);

const localeCodes = new Map<string, string>([
    ['/hp/sf/sf-us/snapfish-us', 'en_US'],
    ['/hp/sf/sf-uk/snapfish-uk', 'en_GB'],
    ['/hp/sf/sf-uk/truprint-uk', 'en_GB'],
    ['/hp/sf/sf-uk/boots', 'en_GB'],
    ['/hp/sf/sf-uk/virginmedia-uk', 'en_GB'],
    ['/hp/sf/sf-uk/hipp-uk', 'en_GB'],
    ['/hp/sf/snapfish_at/snapfishat', 'en_US'],
    ['/hp/sf/snapfish_au/snapfishau', 'en_US'],
    ['/hp/sf/snapfish_au/kmart-au', 'en_US'],
    ['/hp/sf/snapfish_au/huggies-au', 'en_US'],
    ['/hp/sf/snapfish_de/snapfishde', 'de_DE'],
    ['/hp/sf/snapfish_fr/snapfishfr', 'fr'],
    ['/hp/sf/snapfish_ie/snapfishie', 'ie'],
    ['/hp/sf/snapfish_ie/eumom', 'ie'],
    ['/hp/sf/snapfish_ie/bootsroi', 'ie'],
    ['/hp/sf/snapfish_it/snapfishit', 'it'],
    ['/hp/sf/snapfish_it/carrefour', 'it'],
    ['/hp/sf/snapfish_it/trony', 'it'],
    ['/hp/sf/snapfish_nz/snapfishnz', 'en_US'],
    ['/hp/sf/snapfish_nz/huggies-nz', 'en_US'],
    ['/walgreens/wg/wg-us/walgreens-us', 'en_US'],
    ['/cvs/cvs-photo/cvs-us/cvs-photo-us', 'en_US'],
    ['/amazon/printing/us/default', 'en_US']
]);

@Injectable({
    providedIn: 'root'
})
export class CurrencyFormatter {
    constructor() {}

    getISOCode(context: string): string {
        return currencyCodes.get(context)!;
    }

    getLocale(context: string): string {
        return localeCodes.get(context)!;
    }

    formatAmt(amount: number, context: string): string {
        return formatCurrency(amount, 'en_US', getCurrencySymbol(this.getISOCode(context), 'wide'));
    }

    getCurrencySymbol(context: string): string {
        return getCurrencySymbol(this.getISOCode(context), 'wide');
    }
}
