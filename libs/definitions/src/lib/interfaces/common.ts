import { CoBrandCommerceAvailability } from './commerce';
import { Command, Predicate } from '@snapfish/tools-core-client';

export type CriteriaType =
    | 'Global'
    | 'AccountID'
    | 'Email'
    | 'OrderID'
    | 'ShipBinID'
    | 'PartnerAccountID'
    | 'AccountOrders'
    | 'AccountProjects';
export interface CriteriaConfig {
    api: string;
}

export interface HATEOASResponse<T> {
    resources: T[];
    links: HATEOASLink[];
    resourceCount?: number;
}
export interface HATEOASLink {
    rel: string;
    href: string;
}


export interface OrderShortInfo {
    _id: number;
    shipBinId: number;
    status: string;
    product: string;
    paymentStatus: string;
    context: string;
    invoicedDate: Date;
    amount: number;
    totalRefund: number;
    currencyCode?: string;
    currentEDD?: string;
    description?: string;
}

export interface SkuInfo {
    _id: string;
    name: string;
    longTitle?: string;
    longDescription: string;
    productCategory: string;
    finishName?: string;
    dispersionProductCategory: string;
    builderProductCategory: string;
    builderOptionCategory: string;
    context: string;
    productStatus: string;
    productStatusMobile: string;
    productStatusMobileAndroid: string;
}

export interface VendorInfo {
    _id: string;
    name: string;
    context: string;
    vendorAddress: string;
    vendorCity: string;
    vendorCounty: string;
    vendorState: string;
    vendorCountry: string;
    vendorPostalCode: string;
    vendorPhone: string;
    processorPlantId: number;
}

export interface AlbumInfo {
    _id: number;
    caption: string;
    createDate: Date;
    updateDate: Date;
    ownerAccountId: number;
    version: number;
    assetCount: number;
    status: string;
    shared: string;
}

export interface PictureInfo {
    _id: number;
    caption: string;
    createDate: Date;
    updateDate: Date;
    context: string;
    assetType: string;
    ownerAccountId: number;
    width: number;
    height: number;
    thumbnailUrl: string;
    hiresUrl: string;
}

export interface ProjectShortInfo {
    _id: number;
    projectName: string;
    orderId: number;
    state: string;
    context: string;
    createDate: Date;
    updateDate: Date;
    deletionDate?: Date;
    sourceGroup: string;
    commerceSku: string;
}
