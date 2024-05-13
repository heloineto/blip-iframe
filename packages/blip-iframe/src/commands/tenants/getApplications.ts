// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { Sender, TO_PORTAL_URL } from '../../lib';
import { buildURI } from '../../lib/utils/buildURI';

export interface GetApplicationsParams {
  /**
   * The tenant's identity
   */
  tenantId: string;
  /**
   * There are two API endpoints to get applications: `tenants/<tenantId>/applications`
   * and `applications?tenantId=<tenantId>`. This parameter is used to specify which
   * endpoint should be used. If `all` is passed, it will try all endpoints consecutively.
   *
   * @default 'all'
   */
  method: 'searchParams' | 'slug' | 'all';
}

export async function getApplications(
  { tenantId, method = 'all' }: GetApplicationsParams,
  sender?: Sender
) {
  if (method === 'slug' || method === 'all') {
    const uri = buildURI({
      paths: ['tenants', tenantId, 'applications'],
    });

    const response = await sendCommand<GetApplicationsResponse>(
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

    if (method === 'slug') {
      return response;
    } else if (response.success) {
      return response;
    }
  }

  const uri = buildURI({
    paths: ['applications'],
    params: { tenantId },
  });

  const response = await sendCommand<GetApplicationsResponse>(
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

  return response;
}

export interface GetApplicationsResponse {
  total?: number;
  itemType: string;
  items: GetApplicationsItem[];
}

export interface GetApplicationsItem {
  shortName: string;
  name: string;
  description: string;
  template: string;
  tenantId: string;
  created: string;
  updated: string;
  hasPermission: boolean;
  emailOwner: string;
  imageUri?: string;
}
