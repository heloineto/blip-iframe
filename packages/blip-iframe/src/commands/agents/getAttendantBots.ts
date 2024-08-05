import { sendCommand } from '../../actions';
import {
  BuildParams,
  buildURI,
  ListParams,
  Sender,
  TO_DESK_URL,
} from '../../lib';

export interface GetAttendantBotsParams extends ListParams, BuildParams {}

/**
 * Gets a list of the current attendant's bots LIME node names, something like `<short-name>@msging.net`
 * @param params - The parameters for the function
 * @returns
 */
export async function getAttendantBots(
  { filter, take, skip, ...buildSearchParams }: GetAttendantBotsParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['agents', 'owners'],
    params: {
      $filter: filter,
      $take: take,
      $skip: skip,
    },
    ...buildSearchParams,
  });

  return await sendCommand<GetAttendantBotsResponse>(
    {
      command: {
        method: 'get',
        to: TO_DESK_URL,
        uri,
      },
    },
    sender
  );
}

export interface GetAttendantBotsResponse {
  total: number;
  itemType: string;
  items: string[];
}
