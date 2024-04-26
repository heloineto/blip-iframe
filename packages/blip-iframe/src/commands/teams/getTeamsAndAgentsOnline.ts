import { sendCommand } from '../../actions';
import {
  BuildParams,
  buildURI,
  ListParams,
  Sender,
  TO_DESK_URL,
} from '../../lib';

export interface GetTeamsAndAgentsOnlineParams
  extends ListParams,
    BuildParams {}

/**
 *
 * @param params - The parameters for the function
 * @param sender Override the function that sends the command. By default it uses IframeMessageProxy
 * @returns
 */
export async function getTeamsAndAgentsOnline(
  { filter, skip, take, ...buildParams }: GetTeamsAndAgentsOnlineParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['teams', 'agents-online'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
    },
    ...buildParams,
  });

  return await sendCommand<GetTeamsAndAgentsOnlineResponse>(
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

export interface GetTeamsAndAgentsOnlineResponse {
  total?: number;
  itemType: string;
  items: GetTeamsAndAgentsOnlineItem[];
}

export interface GetTeamsAndAgentsOnlineItem {
  name: string;
  agentsOnline: number;
}
