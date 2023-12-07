import { sendMessage } from '../lib';

export interface GetTenantUrlParams {
  tenantId?: string;
}

// TODO: Verify, does not work
export function getTenantUrl({ tenantId }: GetTenantUrlParams = {}, sender = sendMessage) {
  return sender<GetTenantUrlResponse>({
    action: 'getTenantUrl',
    content: {
      tenantId,
    },
  });
}

export interface GetTenantUrlRequest {
  action: 'getTenantUrl';
  content: {
    tenantId?: string;
  };
}

export interface GetTenantUrlResponse {}
