// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';

export interface GetEventTrackCountParams extends ListParams, BuildParams {
  category: string;
  /** The start of the time interval to search from. Formatted as an ISO date string */
  startDate?: string;
  /** The end of the time interval to search from. Formatted as an ISO date string */
  endDate?: string;
}

export async function getEventTrackCount(
  {
    category,
    filter,
    skip,
    take,
    startDate,
    endDate,
    ...buildParams
  }: GetEventTrackCountParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['event-track-count', category],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
      startDate,
      endDate,
    },
    ...buildParams,
  });

  return await sendCommand<GetEventTrackCountResponse>(
    { command: { method: 'get', uri } },
    sender
  );
}

export interface GetEventTrackCountResponse {
  intervalStart: string;
  intervalEnd: string;
  count: number;
}
