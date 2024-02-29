// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { PORTAL_POSTMASTER_URL, Sender } from '../../lib';
import buildURI from '../../lib/utils/buildURI';

export interface GetApplicationsParams {
  /**
   * The tenant's identity
   */
  tenantId: string;
}

export async function getApplications(
  { tenantId }: GetApplicationsParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['tenants', tenantId, 'applications'],
  });

  return await sendCommand<GetApplicationsResponse>(
    {
      destination: 'BlipService',
      command: {
        method: 'get',
        to: PORTAL_POSTMASTER_URL,
        uri,
      },
    },
    sender
  );
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
