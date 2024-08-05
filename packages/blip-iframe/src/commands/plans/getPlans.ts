// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { ListParams, Sender, TO_PORTAL_URL } from '../../lib';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';

export interface GetPlansParams extends ListParams, BuildParams {}

/**
 * Gets all the plans available in the Blip platform
 * @param params - The parameters for the function
 * @param sender - The function that sends the command. By default it uses IframeMessageProxy
 * @returns
 */
export async function getPlans(
  { filter, skip, take, ...buildParams }: GetPlansParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['plans'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
    },
    ...buildParams,
  });

  return await sendCommand<GetPlansResponse>(
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

export interface GetPlansResponse {
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
