// Order Resource - Start
export interface Order extends Price {
    _id: number;
    accountId: string;
    label: string;
    paymentId: string;
    status: string;
    createDate: string;
    updateDate?: string;
    shipBins: ShipBin[];
    invoicedDate: string;
    promotionCodes: any[];
    context: string;
    orderPlaceData: OrderPlaceData;
    chargeBackData: any[];
    appId: string;
    testAccount: boolean;
    dataCenter: string;
    environment: string;
    partner: string;
    openInvoiceData?: any;
}

export interface OrderPlaceData {
    customerIpAddress: string;
    recurringPayment: boolean;
    paymentMethod: string;
    hostedFieldsEnabled: string;
    sourceGroup: string;
}

export interface Discount {
    totalDiscount: number;
    details: DiscountDetail[];
}

export interface DiscountDetail {
    promotionName: string;
    promotionId: number;
    accountPromotionId: number;
    discountQty: number;
    discountAmount: number;
    isSalePrice: boolean;
    credit: false;
}

export interface ShipBin extends Price {
    status: string;
    vendorId: string;
    deliveryMethod: string;
    deliveryOption: string;
    shippingAddressId: string;
    shipBinId: number;
    paymentStatus: string;
    stateChange: string;
    lineItems: LineItem[];
    taxInfo: any[];
    minEstimatedDeliveryDate: string;
    maxEstimatedDeliveryDate: string;
    statusHistory: StatusHistory[];
    deliveryDateDisplay: string;
    refunds: any[];
    amount?: number;
    completeDate?: string;
    metadata: any[];
}

export interface LineItem extends Price {
    vendor: string;
    skuId: string;
    projectId: string;
    quantity: number;
    lineItemId: number;
    subscriptionId: number;
    sourceGroup: string;
    priceLevel: number;
    lineItemOptions?: LineItemOption[];
    taxInfo: TaxInfo;
    retryCount: number;
    failureCount: number;
    metadata: any[];
    refunds: any[];
}

export interface LineItemOption extends Price {
    optionId: string;
    quantity: number;
    lineItemOptionId: number;
    sourceGroup: string;
    taxInfo: TaxInfo;
    refunds: any[];
}

export interface TaxInfo {
    taxed: boolean;
    source: string;
    countryCode: string;
    stateCode: string;
    inclusive: boolean;
    shipping: boolean;
    productTax: Tax;
    shippingTax: Tax;
    rate: number;
    shippingRate: number;
    productDetails: any[];
    shippingDetails: any[];
}

export interface Tax {
    state: State;
}

export interface State {
    taxRate: number;
    taxAmount: number;
    taxDescription: string;
}

export interface StatusHistory {
    updateDate: string;
    status: string;
}

export interface Price {
    productTotal: number;
    productTax: number;
    productDiscount: Discount;
    shippingTotal: number;
    shippingTax: number;
    shippingDiscount: Discount;
    totalRefund: number;
}


// Order Resource - End

// Commerce Error - Start
export interface CommerceError {
    CommerceError: CommerceErrorClass;
    nextRef?: string;
}

export interface CommerceErrorClass {
    httpstatusCode: number;
    uri: string;
    lang: string;
    errorId: string;
    trackerId: string;
    details: Detail[];
}

export interface Detail {
    commerceErrorCode: string;
    description: string;
    detail: string;
}
// Commerce Error Response - End

// Vendor - Start
export interface Vendor {
    _id: string;
    name: string;
    context: string;
    updateDate: string;
    timeZone: string;
    vendorStatus: string;
    processorId: number;
    processorPlantId: number;
    vendorAddress: string;
    vendorCity: string;
    vendorCounty: string;
    vendorState: string;
    vendorCountry: string;
    vendorPostalCode: string;
    vendorPhone: string;
    vendorDefaultRenderingFormat: string;
    vendorClosedDays: string[];
    vendorHolidays: string[];
    courierPickupTime: string;
    courierClosedDays: string[];
    courierNonPickupDays: string[];
    courierHolidays: string[];
    adSlatesEnabled: boolean;
    supportedSkus: string[];
    supportedCountries: string[];
    supportedOptions: string[];
    unavailableSkus: { [key: string]: string }[];
    unavailableOptions: { [key: string]: string }[];
    vendorCommerceAvailability: VendorCommerceAvailability[];
    vendorOptionAvailability: VendorOptionAvailability[];
    loc: number[];
}

export interface VendorCommerceAvailability {
    productStatus: string;
    vendorProductType?: string;
    sku: string;
    vendorProductRenderingFormat: string;
    vendorRenderingVariation?: string;
}

export interface VendorOptionAvailability {
    productStatus: string;
    option: string;
}
// Vendor - End

// Sku - Start

export interface SkuShort {
    productId: string;
    productName: string;
    context: string;
}

export interface Sku {
    _id: string;
    name: string;
    updateDate: string;
    attributes: Attributes;
    coBrandCommerceAvailability: CoBrandCommerceAvailability[];
    cobrandOptionAvailability: CoBrandCommerceAvailability[];
}

export interface Attributes {
    finishName?: string;
    safeAreaLeftMetric: SkuMetric;
    legacyUPC: string;
    height: SkuMetric;
    width: SkuMetric;
    designProductCategory: string;
    shortTitle?:string;
    longTitle: string;
    longDescription: string;
    productCategoryId: string;
    builderProductCategory: string;
    builderOptionCategory?: string;
    productSubCategory: string;
    dispersionProductCategory: string;
    minimumResolution: number;
    shippingCategory: string;
    surfaceHeight: SkuMetric;
    surfaceWidth: SkuMetric;
    paperWeight?: SkuMetric;
    surfaceWidthMetric? :SkuMetric;
    productCategory: string;
    orientation: string;
    publish: boolean;
}

export interface SkuMetric {
    units: string;
    value: number;
}
export interface CoBrandCommerceAvailability {
    cobrand: string;
    context: string;
    productStatus: string;
    productStatusMobile: string;
    productStatusMobileAndroid: string;
}

// Sku - End


export interface CSRComment {
    comment: string;
    agentId: string;
    createDate: Date;
}
