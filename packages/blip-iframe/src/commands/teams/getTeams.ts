import { sendCommand } from '../../actions';
import {
  BuildParams,
  buildURI,
  ListParams,
  Sender,
  TO_DESK_URL,
} from '../../lib';

export interface GetTeamsParams extends ListParams, BuildParams {}

/**
 * Gets the teams (as in the queues of teams shown by Blip Desk)
 * @param params - The parameters for the function
 * @param sender Override the function that sends the command. By default it uses IframeMessageProxy
 * @returns
 */
export async function getTeams(
  { filter, skip, take, ...buildParams }: GetTeamsParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['teams'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
    },
    ...buildParams,
  });

  const response = await sendCommand<GetTeamsResponse>(
    {
      command: {
        method: 'get',
        to: TO_DESK_URL,
        uri,
      },
    },
    sender
  );

  if (!response.success) return response;

  return {
    ...response,
    data: {
      ...response.data,
      items: response.data.items.map((item) => ({
        name: item.name,
      })),
    },
  };
}

export interface GetTeamsResponse {
  total?: number;
  itemType: string;
  items: GetTeamsItem[];
}

export interface GetTeamsItem {
  name: string;
}
