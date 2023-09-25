import imp from '../imp';

// TODO: figure out what fullIdentity is

interface GetApplicationParams {
  shortName?: string;
}

/**
 * Get details about a application
 * @param shortName The full identity of the application to get details for
 */
export default async function getApplication({
  shortName,
}: GetApplicationParams = {}) {
  return await imp.sendMessage<GetApplicationResponse>({
    action: 'getApplication',
    content: shortName ?? null,
  });
}

export interface GetApplicationRequest {
  action: 'getApplication';
  content: string | null;
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
