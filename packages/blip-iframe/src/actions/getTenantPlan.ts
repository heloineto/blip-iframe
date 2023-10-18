import { imp } from 'blip-iframe';

export interface GetTenantPlanParams {
  tenantId?: string;
}

/**
 *
 */
export async function getTenantPlan({ tenantId }: GetTenantPlanParams = {}) {
  return await imp.sendMessage<GetTenantPlanResponse>({
    action: 'getTenantPlan',
    content: { tenantId },
  });
}

export interface GetTenantPlanRequest {
  action: 'getTenantPlan';
  content: {
    tenantId?: string;
  };
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
