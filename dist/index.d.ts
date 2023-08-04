/**
 * Get various application details (see response type)
 * @param fullIdentity The full identity of the application to get details for
 */
declare function getApplication(fullIdentity?: string | null): Promise<{
    response: GetApplicationResponse;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface GetApplicationRequest {
    action: 'getApplication';
    content: string | null;
}
interface WrappedGetApplicationResponse {
    response: GetApplicationResponse;
    trackingProperties: {
        id: string;
    };
}
interface GetApplicationResponse {
    shortName: string;
    name: string;
    description: string;
    accessKey: string;
    imageUri: string;
    template: string;
    tenantId: string;
    created: string;
    updated: string;
    hasPermission: boolean;
    emailOwner: string;
    applicationUserPermissionModel: {
        permissionClaim: number;
        permissionAction: number;
    }[];
    applicationDomainActivations: unknown[];
    channels: unknown[];
    applicationJson: Record<string, unknown>;
}

/**
 * Get the language of the current contract
 */
declare function getCurrentLanguage(): Promise<{
    response: string;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface GetCurrentLanguageRequest {
    action: 'getCurrentLanguage';
}
interface WrappedGetCurrentLanguageResponse {
    response: GetCurrentLanguageResponse;
    trackingProperties: {
        id: string;
    };
}
type GetCurrentLanguageResponse = string;

type Permissions = 'write';
type PermissionAreas = 'team';
declare function hasPermissions(permission: Permissions, area: PermissionAreas): Promise<{
    response: boolean;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface HasPermissionRequest {
    action: 'hasPermissions';
    content: {
        permissionType: Permissions;
        customArea: PermissionAreas;
    };
}
interface WrappedHasPermissionResponse {
    response: HasPermissionResponse;
    trackingProperties: {
        id: string;
    };
}
type HasPermissionResponse = boolean;

/**
 * Changes the height the extension's iframe parent
 *
 * Note: The iframe parent has a minimum height of 100%,
 * So if you want the extension to take 100% of the remaining space,
 * pass 0 as the height
 * @param height The height of the extension's iframe parent
 */
declare function heightChange(height: number): Promise<void>;
interface HeightChangeRequest {
    action: 'heightChange';
    content: number;
}

declare function segment(content: SegmentRequest['content']): Promise<void>;
interface SegmentRequest {
    action: 'segment';
    content: {
        method: 'createApplicationTrack';
        parameters: {
            trackEvent: string;
            payload: Record<string, unknown>;
        };
    };
}

declare function sendCommand(content: SendCommandRequest['content']): Promise<{
    response: unknown;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface SendCommandRequest {
    action: 'sendCommand';
    content: {
        timeout?: number;
        destination?: 'BlipService' | 'MessagingHubService';
        command: {
            method: 'get' | 'set' | 'delete' | 'observe' | 'subscribe';
            to?: string;
            uri: string;
            type?: string;
            [key: string]: unknown;
        };
    };
}
interface WrappedSendCommandResponse {
    response: SendCommandResponse;
    trackingProperties: {
        id: string;
    };
}
type SendCommandResponse = unknown;

/**
 * Shows a modal dialog on the main platform with
 * a title, body, confirm and cancel button
 * @param content
 */
declare function showModal(content: ShowModalRequest['content']): Promise<void>;
interface ShowModalRequest {
    action: 'showModal';
    content: {
        title?: string;
        body: string;
        confirm: string;
        cancel: string;
    };
}

/**
 * Sends a message to the Blip Platform to start showing a loading indicator.
 */
declare function startLoading(): Promise<void>;
interface StartLoadingRequest {
    action: 'startLoading';
}

/**
 * Sends a message to the Blip Platform to stop showing a loading indicator.
 */
declare function stopLoading(): Promise<void>;
interface StopLoadingRequest {
    action: 'stopLoading';
}

/**
 * Shows a toast notification on the main platform
 * with a message, title a type and the duration is in milliseconds
 *
 * @param content
 */
declare function toast(content: ToastRequest['content']): Promise<void>;
type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';
interface ToastRequest {
    action: 'toast';
    content: {
        type: ToastTypes;
        message: string;
        title?: string;
        duration?: number;
    };
}

declare function getAccount(): Promise<{
    response: GetAccountResponse;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface WrappedGetAccountResponse {
    response: GetAccountResponse;
    trackingProperties: {
        id: string;
    };
}
interface GetAccountResponse {
    fullName: string;
    alternativeAccount: string;
    identity: string;
    email: string;
    phoneNumber: string;
    photoUri: string;
    timeZoneName: string;
    culture: string;
    extras: {
        lastUsedTenants: string;
        cookies: string;
        acceptedPlugins: string;
    };
    creationDate: string;
}

declare function getBot(fullIdentity: string): Promise<{
    response: unknown;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface WrappedGetBotResponse {
    response: GetBotResponse;
    trackingProperties: {
        id: string;
    };
}
type GetBotResponse = unknown;

declare function getBots(tenantId?: string): Promise<{
    response: unknown;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface GetBotsResponse {
    total: number;
    items: {
        name: string;
        shortName: string;
        imageUri?: string;
    }[];
}

declare function getPublishedFlow(): Promise<{
    response: GetPublishedFlowResponse;
    error: null;
} | {
    response: null;
    error: unknown;
}>;
interface WrappedGetPublishedFlowResponse {
    response: GetPublishedFlowResponse;
    trackingProperties: {
        id: string;
    };
}
type GetPublishedFlowResponse = {
    [key: string]: {
        [key: string]: unknown;
    };
};

interface HideNavbarRequest {
    action: 'hideNavbar';
}

type Request = GetApplicationRequest | GetCurrentLanguageRequest | HasPermissionRequest | HeightChangeRequest | SegmentRequest | SendCommandRequest | ShowModalRequest | StartLoadingRequest | StopLoadingRequest | ToastRequest | HideNavbarRequest;

interface IframeMessageProxy {
    config: (options?: Options) => IframeMessageProxy;
    listen: () => void;
    stopListen: () => void;
    sendMessage: (payload: Message) => Promise<{
        response: unknown;
        trackingProperties: TrackingProperties;
    }>;
}
type Message = Request & {
    caller?: string;
    fireAndForget?: boolean;
};
interface Options {
    prefix?: string;
    caller?: string;
    receiveWindow?: Window;
    targetWindow?: Window;
    shouldHandleMessage?: (message: {
        message: Message;
        trackingProperties: TrackingProperties;
    }) => boolean;
}
interface TrackingProperties {
    id: string;
}

declare function setVariable<TVariable>(variableKey: string, variable: TVariable): Promise<{
    response: {
        response: unknown;
        trackingProperties: TrackingProperties;
    };
    error: null;
} | {
    response: null;
    error: unknown;
}>;

declare function getVariable<TResponse>(variableKey: string): Promise<{
    response: TResponse;
    error: null;
} | {
    response: null;
    error: unknown;
}>;

interface ShowNavbarRequest {
    action: 'showNavbar';
}

declare const iframe: {
    actions: {
        getApplication: typeof getApplication;
        getCurrentLanguage: typeof getCurrentLanguage;
        hasPermissions: typeof hasPermissions;
        heightChange: typeof heightChange;
        hideNavbar: () => Promise<void>;
        segment: typeof segment;
        sendCommand: typeof sendCommand;
        showModal: typeof showModal;
        showNavbar: () => Promise<void>;
        startLoading: typeof startLoading;
        stopLoading: typeof stopLoading;
        toast: typeof toast;
    };
    commands: {
        getAccount: typeof getAccount;
        getBot: typeof getBot;
        getBots: typeof getBots;
        getPublishedFlow: typeof getPublishedFlow;
    };
    bucket: {
        setVariable: typeof setVariable;
        getVariable: typeof getVariable;
    };
    imp: IframeMessageProxy;
    getApplication: typeof getApplication;
    getCurrentLanguage: typeof getCurrentLanguage;
    hasPermissions: typeof hasPermissions;
    heightChange: typeof heightChange;
    hideNavbar: () => Promise<void>;
    segment: typeof segment;
    sendCommand: typeof sendCommand;
    showModal: typeof showModal;
    showNavbar: () => Promise<void>;
    startLoading: typeof startLoading;
    stopLoading: typeof stopLoading;
    toast: typeof toast;
};

export { GetAccountResponse, GetApplicationRequest, GetApplicationResponse, GetBotResponse, GetBotsResponse, GetCurrentLanguageRequest, GetCurrentLanguageResponse, GetPublishedFlowResponse, HasPermissionRequest, HasPermissionResponse, HeightChangeRequest, HideNavbarRequest, PermissionAreas, Permissions, SegmentRequest, SendCommandRequest, SendCommandResponse, ShowModalRequest, ShowNavbarRequest, StartLoadingRequest, StopLoadingRequest, ToastRequest, ToastTypes, WrappedGetAccountResponse, WrappedGetApplicationResponse, WrappedGetBotResponse, WrappedGetCurrentLanguageResponse, WrappedGetPublishedFlowResponse, WrappedHasPermissionResponse, WrappedSendCommandResponse, iframe as default };
