import { sendMessage } from '../lib/shared/sendMessage';

export interface AddTenantPrefixToUrlParams {
  /**
   * The URL to add the tenant ID prefix to
   */
  url: string;
  /**
   * The tenant ID (optional). If not provided, the current tenant ID will be used.
   */
  tenantId?: string;
}

/**
 * Adds the tenant id prefix to the url.
 * If no tenant id is provided, the current tenant id will be used.
 *
 * Example: https://example.com -> https://tenant-id.example.com
 * @param params The parameters for the function
 * @returns A url string with the tenant id prefix
 */
export function addTenantPrefixToUrl(
  { url, tenantId }: AddTenantPrefixToUrlParams,
  sender = sendMessage
) {
  return sender<AddTenantPrefixToUrlResponse>(
    {
      action: 'addTenantPrefixToUrl',
      content: {
        url,
        tenantId,
      },
    },
  );
}

export interface AddTenantPrefixToUrlRequest {
  action: 'addTenantPrefixToUrl';
  content: {
    url: string;
    tenantId?: string;
  };
}

export type AddTenantPrefixToUrlResponse = string;
