import { sendCommand } from '../../actions/sendCommand';
import { PORTAL_POSTMASTER_URL } from '../../lib';
import {
  GetListParams,
  parseListParams,
} from '../../lib/shared/parseListParams';
import { buildURI } from '../../lib/utils';

export interface ApplicationUserAccountsParams extends GetListParams {
  shortName: string;
}

/**
 * Gets a list of attendants in the Blip platform.
 * @param params The getApplicationUserAccounts parameters.
 * @returns A promise that resolves to a list of attendants.
 */
export async function getApplicationUserAccounts({
  shortName,
  ...listParams
}: ApplicationUserAccountsParams) {
  const uri = buildURI({
    paths: ['applications', `${shortName}@msging.net`, 'users', 'accounts'],
    params: parseListParams(listParams),
  });

  return await sendCommand<GetApplicationUserAccountsResponse>({
    command: {
      method: 'get',
      to: PORTAL_POSTMASTER_URL,
      uri,
    },
  });
}

export interface GetApplicationUserAccountsResponse {
  total: number;
  itemType: string;
  items: GetApplicationUserAccountsItem[];
}

export interface GetApplicationUserAccountsItem {
  identity: string;
  fullName: string;
  email: string;
  teams: string[];
  status: string;
  isEnabled: boolean;
  agentSlots?: number;
  lastServiceDate?: string;
}
