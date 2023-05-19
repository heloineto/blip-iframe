import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Get various application details (see response type)
 * @param fullIdentity The full identity of the application to get details for
 */
const getApplication = async (fullIdentity?: string | null) => {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'getApplication',
      content: fullIdentity ?? null
    })) as WrappedGetApplicationResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
};

export interface GetApplicationRequest {
  action: 'getApplication';
  content: string | null;
}

export interface WrappedGetApplicationResponse {
  response: Response;
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

export default getApplication;
