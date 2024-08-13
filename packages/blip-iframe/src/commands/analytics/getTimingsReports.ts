import { sendCommand } from '../../actions';
import {
  BuildParams,
  buildURI,
  ListParams,
  Sender,
  TO_DESK_URL,
} from '../../lib';

export interface GetTimingsReportsParams extends ListParams, BuildParams {
  version?: number;
  beginDate: string;
  endDate: string;
  operators?: string | string[];
  // channels: channels,
  // agents: agents,
  // teams: teams,
  // tags: tags,
}

/**
 * Get metrics about tickets timings
 * @param params - The parameters for the function
 * @param sender - The function that sends the command. By default it uses IframeMessageProxy
 */
export async function getTimingsReports(
  {
    take,
    skip,
    filter,
    version = 2,
    beginDate,
    endDate,
    operators,
    ...buildPrams
  }: GetTimingsReportsParams,
  sender?: Sender,
) {
  const uri = buildURI({
    paths: ['analytics', 'reports', 'timings'],
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

  return await sendCommand<GetTimingsReportsResponse>(
    {
      command: {
        method: 'get',
        to: TO_DESK_URL,
        uri,
      },
    },
    sender,
  );
}

export interface GetTimingsReportsResponse {
  maxQueueTime: string;
  maxFirstResponseTime: string;
  maxWithoutFirstResponseTime: string;
  avgQueueTime: string;
  avgFirstResponseTime: string;
  avgWaitTime: string;
  avgResponseTime: string;
  avgAttendanceTime: string;
}
