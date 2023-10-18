import imp from '../imp';

export interface AddTenantPrefixToUrlParams {
  url: string;
  tenantId?: string;
}

/**
 * Adds the tenant id prefix to the url
 */
export default async function addTenantPrefixToUrl({
  url,
  tenantId,
}: AddTenantPrefixToUrlParams) {
  return await imp.sendMessage<AddTenantPrefixToUrlResponse>({
    action: 'addTenantPrefixToUrl',
    content: {
      url,
      tenantId,
    },
  });
}

export interface AddTenantPrefixToUrlRequest {
  action: 'addTenantPrefixToUrl';
  content: {
    url: string;
    tenantId?: string;
  };
}

export interface AddTenantPrefixToUrlResponse {}
