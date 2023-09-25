import { IframeMessageProxy } from 'iframe-message-proxy';

export interface GetTenantPlanParams {
  tenantId: string;
}

/**
 * Get details about a application
 */
export default async function getTenantPlan({ tenantId }: GetTenantPlanParams) {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'getTenantPlan',
      content: { tenantId },
    })) as WrappedGetTenantPlanResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface GetTenantPlanRequest {
  action: 'getTenantPlan';
  content: {
    tenantId: string;
  };
}

export interface WrappedGetTenantPlanResponse {
  response: GetTenantPlanResponse;
  trackingProperties: { id: string };
}

export interface GetTenantPlanResponse {
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
