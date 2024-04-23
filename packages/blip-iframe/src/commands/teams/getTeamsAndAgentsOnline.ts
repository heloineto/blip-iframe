import { sendCommand } from '../../actions';
import { buildURI, DESK_POSTMASTER_URL, ListParams, Sender } from '../../lib';

export interface GetTeamsAndAgentsOnlineParams extends ListParams {}

/**
 *
 * @param params - The parameters for the function
 * @returns
 */
export async function getTeamsAndAgentsOnline(
  { filter, skip, take }: GetTeamsAndAgentsOnlineParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['teams', 'agents-online'],
    params: {
      $filter: filter || undefined,
      $skip: skip,
      $take: take,
    },
  });

  return await sendCommand<GetTeamsAndAgentsOnlineResponse>(
    {
      command: {
        method: 'get',
        to: DESK_POSTMASTER_URL,
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
