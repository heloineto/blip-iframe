// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { Sender, TO_PORTAL_URL } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';

export interface ApplicationUserAccountsParams extends ListParams, BuildParams {
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
  {
    shortName,
    filter,
    skip,
    take,
    ...buildParams
  }: ApplicationUserAccountsParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['applications', `${shortName}@msging.net`, 'users', 'accounts'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
    },
    ...buildParams,
  });

  return await sendCommand<GetApplicationUserAccountsResponse>(
    {
      command: {
        method: 'get',
        to: TO_PORTAL_URL,
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
