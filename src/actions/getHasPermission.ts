import { IframeMessageProxy } from 'iframe-message-proxy';

export type Permissions = 'write';
export type PermissionAreas = 'team';

const getHasPermission = async (
    permission: Permissions,
    area: PermissionAreas
) => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'hasPermissions',
            content: {
                permissionType: permission,
                customArea: area
            }
        })) as WrappedGetHasPermissionResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export interface RequestHasPermission {
    action: 'hasPermissions';
    content: {
        permissionType: Permissions;
        customArea: PermissionAreas;
    };
}

export interface WrappedGetHasPermissionResponse {
    response: GetHasPermissionResponse;
    trackingProperties: { id: string };
}

export type GetHasPermissionResponse = boolean;

export default getHasPermission;
