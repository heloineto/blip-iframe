import imp from '../imp';

export interface GetApplicationParams {
  /**
   * The shortName (aka identity) of the bot to get details for.
   * Leave blank to get details for the current bot
   */
  shortName?: string;
}

/**
 * Get details about a bot (application)
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
