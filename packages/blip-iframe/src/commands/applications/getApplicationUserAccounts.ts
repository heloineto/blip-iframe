// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { PORTAL_POSTMASTER_URL, Sender } from '../../lib';
import { ListParams, parseListParams } from '../../lib/shared/parseListParams';
import { buildURI } from '../../lib/utils/buildURI';

export interface ApplicationUserAccountsParams extends ListParams {
  /**
   * The bot's shortName (aka identity)
   */
  shortName: string;
}

/**
 * Gets a list of users of a certain bot.
 * @param params The getApplicationUserAccounts parameters.
 * @returns A promise that resolves to a list of attendants.
 */
export async function getApplicationUserAccounts(
  { shortName, ...listParams }: ApplicationUserAccountsParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['applications', `${shortName}@msging.net`, 'users', 'accounts'],
    params: parseListParams(listParams),
  });

  return await sendCommand<GetApplicationUserAccountsResponse>(
    {
      command: {
        method: 'get',
        to: PORTAL_POSTMASTER_URL,
        uri,
      },
    },
    sender
  );
}

export interface GetApplicationUserAccountsResponse {
  total?: number;
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
