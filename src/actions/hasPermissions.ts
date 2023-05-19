import { IframeMessageProxy } from 'iframe-message-proxy';

export type Permissions = 'write';
export type PermissionAreas = 'team';

const hasPermissions = async (
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
    })) as WrappedHasPermissionResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
};

export interface HasPermissionRequest {
  action: 'hasPermissions';
  content: {
    permissionType: Permissions;
    customArea: PermissionAreas;
  };
}

export interface WrappedHasPermissionResponse {
  response: HasPermissionResponse;
  trackingProperties: { id: string };
}

export type HasPermissionResponse = boolean;

export default hasPermissions;
