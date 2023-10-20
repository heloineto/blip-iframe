import imp from '../imp';

export interface GetTenantUrlParams {
  tenantId?: string;
}

// TODO: Verify, does not work
export function getTenantUrl({ tenantId }: GetTenantUrlParams = {}) {
  return imp.sendMessage<GetTenantUrlResponse>({
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
