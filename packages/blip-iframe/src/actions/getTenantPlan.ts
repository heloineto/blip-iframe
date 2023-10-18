import { imp } from 'blip-iframe';

export interface GetTenantPlanParams {
  tenantId: string;
}

// TODO: Verify, does not work
export async function getTenantPlan({ tenantId }: GetTenantPlanParams) {
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

export interface GetTenantPlanResponse {}
