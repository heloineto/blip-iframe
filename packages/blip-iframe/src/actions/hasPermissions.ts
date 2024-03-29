import { sendMessage } from '../lib';

export type PermissionType = 'write' | 'read' | (string & {});
export type CustomArea =
  | 'payments'
  | 'iaProviders'
  | 'iaModel'
  | 'iaEnhancement'
  | 'channels'
  | 'desk'
  | 'users'
  | 'scheduler'
  | 'basicConfigurations'
  | 'connectionInformations'
  | 'resources'
  | 'team'
  | 'logMessages'
  | 'builder'
  | 'analysis'
  | 'salesTools'
  | 'dashboard'
  | (string & {});

export interface HasPermissionsParams {
  /**
   * The permission type to check
   */
  permissionType: PermissionType;
  /**
   * The custom area to check
   */
  customArea?: CustomArea;
}

/**
 * Checks if the user has the specified permissions on the Blip platform
 * @param params The permissions parameters to check
 * @returns `true` if the user has the specified permissions, `false` otherwise
 */
export function hasPermissions(
  params: HasPermissionsParams,
  sender = sendMessage
) {
  return sender<HasPermissionRequest>({
    action: 'hasPermissions',
    content: params,
  });
}

export interface HasPermissionRequest {
  action: 'hasPermissions';
  content: {
    permissionType: PermissionType;
    customArea?: CustomArea;
  };
}

export type HasPermissionResponse = boolean;
