import { IframeMessageProxy } from 'iframe-message-proxy';

// TODO: figure out what fullIdentity is

/**
 * Get details about a application
 * @param fullIdentity The full identity of the application to get details for
 */
export default async function getApplication(fullIdentity?: string | null) {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'getApplication',
      content: fullIdentity ?? null,
    })) as WrappedGetApplicationResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface GetApplicationRequest {
  action: 'getApplication';
  content: string | null;
}

export interface WrappedGetApplicationResponse {
  response: GetApplicationResponse;
  trackingProperties: { id: string };
}

export interface GetApplicationResponse {
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
