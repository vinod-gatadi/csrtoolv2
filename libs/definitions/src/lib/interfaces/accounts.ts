// export class AccountId {

//     set accountId(id: string) {
//         this._accountId = id;
//     }
//     get accountId() {
//         return this._accountId.;
//     }
//     stringify() {

//     }
// }

export interface AccountInfo {
    account: Account;
    addresses: Address[];
    payments: Payment[];
}
export class AccountResponse {
    partner?: string;
    dataCenter?: string;
    email?: string;
    accountId: string;
    globalInfo: GlobalInfo;
    localInfos?: ContextInfo;
    createDate: string;
}
export class Account {
    partner?: string;
    dataCenter?: string;
    email: string;
    accountId: string;
    firstName: string;
    lastName: string;
    statusCode: string;
    visitedContexts: VisitedContext[];
    createDate: string;
}

export interface VisitedContext {
    context: string;
    homeContext: boolean;
    lastLoginDate: string;
    visits: number;
    cobrand: string;
    metadata: Metadata;
}

interface CommonAddress {
    firstName: string;
    lastName: string;
    line1: string;
    line2: string;
    line3: string;
    companyName: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    accountId: string;
    createDate: string;
    context: string;
    county?: string;
}

export interface Address extends CommonAddress {
    _id: string;
    tags: string[];
    phones: string[];
    verificationFlag: 'unVerified';
}

export interface Payment extends CommonAddress {
    _id: string;
    tokens: string[];
    creditCard: CreditCard;
}
export interface CreditCard {
    displayNumber: string;
    expireMonth: number;
    expireYear: number;
    panFirst6: string;
    panLast4: string;
    panLength: number;
    type: string;
}

export interface GlobalInfo {
    core: GlobalInfoCore;
    metadata?: { [key: string]: string };
}

export interface GlobalInfoCore {
    statusCode: string;
    countryCode?: string;
    firstName: string;
    lastName: string;
    primaryEmail: string;
    guid?: string;
    homeContext: string;
}

export interface GlobalInfoMetadata {
    lastOrderDate: string;
}

export interface ContextInfo {
    [key: string]: LocalInfo;
}
export interface LocalInfo {
    core: LocalInfoCore;
    metadata: Metadata;
    visits: {
        [key: string]: Vists;
    };
}
export interface Metadata {
    [key: string]: string;
}

export interface LocalInfoCore {
    typeCode: string;
    languageCode: string;
    lastLoginDate: string;
    phoneNumber: string;
}

export interface Vists {
    visitCount: number;
    lastLoginDate: string;
}

export interface Context {
    displayName?: string;
    enabled?: boolean;
    cobrand?: string;
    level: ContextLevel;
    _id: string;
}

export type ContextLevel = 'L4' | 'L3' | 'L2' | 'L1';
