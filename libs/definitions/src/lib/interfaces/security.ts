export interface AuthOptions {
    agentRoles: { [context: string]: string[] };
    availableRoles?: { roles: RolesWithPemissions };
    partner:string,
    context?: string;
}

export interface RolesAndPermissions {
    permissions: {
        [act in Action]?: {
            displayName?: string;
            description?: string;
        };
    };
    roles: RolesWithPemissions;
}

export type RolesWithPemissions = {
    [partner in Partner]?: {
        [role in CSRRole]?: {
            description?: string;
            displayName?: string;
            permissions: Action[];
        };
    };
};

export type Action =
    | 'canIssueCredit'
    | 'canRefundCredit'
    | 'canRefundOrder'
    | 'canSpecialRefund'
    | 'canResubmitOrder'
    | 'canVoidOrder'
    | 'canMarkFraud'
    | 'canMarkSpam'
    | 'canEmailSubcribe'
    | 'canUpdateEmail'
    | 'canResetPassword'
    | 'canCancelAccount'
    | 'canDeleteAccount'
    | 'canClearCart'
    | 'canRemoveCard'
    | 'canUpdateAccount'
    | 'canUpdateHomeContext'
    | 'canUnarchiveAssets'
    | 'canAddComment'
    | 'canDeleteComment'
    | 'canUpdateVideoSubs'
    | 'canUpdateCashBalance'
    | 'canUpdateTaxExempt'
    | 'canCustomerHome '
    | 'canDeleteProjects'
    | 'canManageSubscription'
    | 'canViewAlbum'
    | 'canUndeleteAlbums'
    | 'canTransferAlbums'
    | 'canLogComment'
    | 'canEditPermissions';
export type CSRRole = 'CS1' | 'CS2' | 'CS3' | 'CSA' | 'CSW' | 'CSR';
export type Partner = 'snapfish' | 'walgreens' | 'cvs' | 'amazon';
