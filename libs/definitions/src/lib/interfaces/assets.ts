// AlbumResource - Start
export interface AlbumEntities {
    entities: Album[];
    errorId?: null;
    resultCount: number;
    errors: any[];
    results: any[];
    totalEntitiesCount: number;
}

export interface Album {
    createDate: number;
    deletionDate?: number;
    updateDate: number;
    version: number;
    markedForDelete: boolean;
    dataCenter: string;
    context?: string;
    ownerAccountId: number;
    userTags: AssetTag[];
    systemTags: AssetTag[];
    accessLevel: string;
    collectionType: string;
    autobackupMonthYear: string;
    collectionDate?: number;
    assetIdList: Asset[];
    firstAssetId: Asset;
    status: null;
    id: number;
    caption?: string;
    selectionStatus?: boolean;
}

export interface Asset {
    assetId: number;
    ownerId: number;
    assetType?: string;
    thumbnailEncryption: string;
}

export interface AssetTag {
    value: string;
    key: string;
}

// AlbumResource - Start

// PictureResource - Start
export interface PictureEntity {
    entities: Picture[];
    entityMap: any;
    results: any[];
    errorId?: string;
    resultCount: number;
    errors: any[];
    totalEntitiesCount: number;
}

export interface Picture {
    _id: number;
    createDate: number;
    deletionDate?: number;
    updateDate: number;
    version: number;
    markedForDelete: boolean;
    dataCenter: string;
    context?: string;
    ownerAccountId: number;
    userTags: AssetTag[];
    systemTags: AssetTag[];
    partnerNodeId?: number;
    partnerAccountId?: number;
    status?: string;
    currentImageInfo: CurrentImageInfo;
    exifTags: any[];
    assetType: string;
    files: File[];
    parentCollectionReferences: ParentCollectionReference[];
    faces: any[];
    dateTaken: number;
    mangledHrUrl: null;
    storageId: string;       
}

export interface CurrentImageInfo {
    currentWidth: number;
    currentHeight: number;
}

export interface File {
    fileType: string;
    url: string;
    width: number;
    height: number;
    size: number;
}

export interface ParentCollectionReference {
    ownerAccountId: number;
    collectionId: number;
}

// PictureResource - End
