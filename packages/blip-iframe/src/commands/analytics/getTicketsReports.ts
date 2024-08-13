import { sendCommand } from '../../actions';
import {
  BuildParams,
  buildURI,
  ListParams,
  Sender,
  TO_DESK_URL,
} from '../../lib';

export interface GetTicketsReportsParams extends ListParams, BuildParams {
  version?: number;
  beginDate: string;
  endDate: string;
  operators?: string | string[];
}

/**
 * Get metrics about tickets, separated by date
 * @param params - The parameters for the function
 * @param sender - The function that sends the command. By default it uses IframeMessageProxy
 */
export async function getTicketsReports(
  {
    take,
    skip,
    filter,
    version = 2,
    beginDate,
    endDate,
    operators,
    ...buildPrams
  }: GetTicketsReportsParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['analytics', 'reports', 'tickets'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
      version,
      beginDate,
      endDate,
      operators: Array.isArray(operators) ? operators.join(',') : operators,
    },
    ...buildPrams,
  });

  return await sendCommand<GetTicketsReportsResponse>(
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

export interface GetTicketsReportsResponse {
  total?: number;
  itemType: string;
  items: GetTicketsReportsItem[];
}

export interface GetTicketsReportsItem {
  date: string;
  waiting: number;
  open: number;
  closed: number;
  closedAttendant: number;
  closedClient: number;
  transferred: number;
  missed: number;
  inAttendance: number;
}
