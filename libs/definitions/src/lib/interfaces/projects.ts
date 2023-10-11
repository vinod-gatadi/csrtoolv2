
export interface Project {
    _id: number;
    dataCenter: string;
    environment: string;
    accountHash: number;
    shardKey: number;
    accountId: string;
    projectType: ProjectType;
    commerceSku?: string;
    projectName: string;
    thumbnailUrl: string;
    editProjectUrl: string;
    state: string;
    context: string;
    sourceGroup: string;
    orderId: number;
    createDate: string;
    updateDate: string;
    deletionDate?: string;
    version: string;
    partner: string;
    iconUrl?: string;
    qty?: number;
    projectMetadata?: ProjectMetadata[];
    surfaceCategories?: SurfaceCategory[];
    designGroup?: any[];
    photoWell?: string[] | Photo[];
    cartIconUrl: string;
    commerceOptions?: any[];
    nextRef?: string;
}
export interface ProjectType {
    group: string;
    name: string;
    version: string;
}
export interface ProjectMetadata {
    name: string;
    metadataType?: string;
    value?: string | string[];
}
export interface SurfaceCategory {
    surfaces: Surface[];
    categoryName: string;
    commerceSku?: string;
}

export interface Surface {
    renderingOutput: RenderingOutput;
    surfaceMetadata: ProjectMetadata[];
    surfaceNumber: string;
    builderData?: BuilderData;
    surfaceData?: BuilderData;
}
export interface BuilderData {
    builderUXPageRules: BuilderUXPageRules;
    pageDetails: PageDetails;
    layeredItems: LayeredItem[];
    version: string;
}
export interface BuilderUXPageRules {
    backgroundId: string;
    layoutId: null;
}
export interface LayeredItem {
    container: Container;
    content?: Content;
    itemUXRules: ItemUXRules;
    assetId?: string;
    fill?: string;
    font?: string;
    fontId?: string;
    pointSize?: number;
    color?: string;
    alignmentAnchor?: string;
    type: string;
    highResSVG: string;
    userAssetId?: string;
    userAssetRef?: string;
    journalCore?: string;
    photoPosition?: Container;
    specialHandling?: RenderingOutput;
    linesOfText?: any;
    userEditedText?: boolean;
    isCustomDesigned?: boolean;
    isPremiumUserText?: boolean;
}

export interface Content {
    contentType: string;
    userData: UserData;
}

export interface UserData {
    assetId: string;
    fill?: string;
    w?: number;
    h?: number;
    x?: number;
    y?: number;
    rot?: number;
    journalCore?: string;
    photo?: Photo;
}
export interface Photo {
    source: string;
    assetRef: string;
}
export interface Container {
    w: number;
    h: number;
    x: number;
    y: number;
    rot: number;
}
export interface ItemUXRules {
    zoomscale?: number;
    supportsFreeStyler?: boolean;
    supportResize?: boolean;
    isLowResPhoto?: boolean;
    lockMovement?: boolean;
    supportRotation?: boolean;
    prevPic?: string;
    fontLoaded?: boolean;
}
export interface RenderingOutput {
    hiresUrl: string;
    md5sum: string;
    bytes: number;
}

export interface PageDetails {
    width: number;
    height: number;
    dpi: number;
    svgHeader: string;
}

