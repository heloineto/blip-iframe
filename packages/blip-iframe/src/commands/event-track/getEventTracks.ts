// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';
import { Contact } from '../contacts';

export interface GetEventTracksParams extends ListParams, BuildParams {
  category: string;
  /** The start of the time interval to search from. Formatted as an ISO date string */
  startDate?: string;
  /** The end of the time interval to search from. Formatted as an ISO date string */
  endDate?: string;
}

export async function getEventTracks(
  {
    category,
    filter,
    skip,
    take,
    startDate,
    endDate,
    ...buildParams
  }: GetEventTracksParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['event-track', category],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
      startDate,
      endDate,
    },
    ...buildParams,
  });

  return await sendCommand<GetEventTracksResponse>(
    {
      command: {
        method: 'get',
        uri,
      },
    },
    sender
  );
}

export interface GetEventTracksResponse {
  total?: number;
  itemType: string;
  items: GetEventTracksItem[];
}

// TODO
export type GetEventTracksItem = Contact;
