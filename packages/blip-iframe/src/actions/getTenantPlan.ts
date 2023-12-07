import { sendMessage } from '../lib';

export interface GetTenantPlanParams {
  tenantId: string;
}

// TODO: Verify, does not work
export function getTenantPlan(
  { tenantId }: GetTenantPlanParams,
  sender = sendMessage
) {
  return sender<GetTenantPlanResponse>({
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
