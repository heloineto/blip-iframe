import imp from '../imp';

/**
 * Fetches the permissions from the Blip Platform.
 * @returns { GetPermissionsObjectResponse } An object containing information about the permissions available for different features in the platform.
 */
export function getPermissionsObject() {
  return imp.sendMessage<GetPermissionsObjectResponse>({
    action: 'getPermissionsObject',
  });
}

export interface GetPermissionsObjectRequest {
  action: 'getPermissionsObject';
}

export interface GetPermissionsObjectResponse {
  payments: PermissionObject;
  iaProviders: PermissionObject;
  iaModel: PermissionObject;
  iaEnhancement: PermissionObject;
  channels: PermissionObject;
  desk: PermissionObject;
  users: PermissionObject;
  scheduler: PermissionObject;
  basicConfigurations: PermissionObject;
  connectionInformations: PermissionObject;
  resources: PermissionObject;
  team: PermissionObject;
  logMessages: PermissionObject;
  builder: PermissionObject;
  analysis: PermissionObject;
  salesTools: PermissionObject;
}

export interface PermissionObject {
  title: string;
  claim: number;
  id: string;
  description: string;
  hideInTemplate?: string[];
}
