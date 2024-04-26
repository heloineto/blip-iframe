// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { Sender, TO_PORTAL_URL } from '../../lib';
import { buildURI } from '../../lib/utils/buildURI';

export interface GetTenantPlanParams {
  /**
   * The tenant's identity
   */
  tenantId: string;
}

export async function getTenantPlan(
  { tenantId }: GetTenantPlanParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['tenants', tenantId, 'subscription'],
  });

  return await sendCommand<GetTenantPlanResponse>(
    {
      destination: 'BlipService',
      command: {
        method: 'get',
        to: TO_PORTAL_URL,
        uri,
      },
    },
    sender
  );
}

export interface GetTenantPlanResponse {
  ownerIdentity: string;
  id: string;
  subscriber: string;
  planId: string;
  startDate: string;
  lastChangeDate: string;
  isPending: boolean;
  isActive: boolean;
  extras: {
    WalletId: string;
    [key: string]: unknown;
  };
}
