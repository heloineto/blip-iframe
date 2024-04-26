import { sendCommand } from '../../actions/sendCommand';
import { Sender, TO_DESK_URL } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';
import { AttendantStatus } from './utils/constants';

export interface GetAttendantsParams extends ListParams, BuildParams {}

/**
 * Gets a list of attendants in the Blip platform.
 * @param params The getAttendants parameters.
 * @returns A promise that resolves to a list of attendants.
 */
export async function getAttendants(
  { take, skip, filter, ...buildPrams }: GetAttendantsParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['attendants'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
    },
    ...buildPrams,
  });

  return await sendCommand<GetAttendantsResponse>(
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

export interface GetAttendantsResponse {
  total?: number;
  itemType: string;
  items: GetAttendantsItem[];
}

export interface GetAttendantsItem {
  identity: string;
  fullName: string;
  email: string;
  teams: string[];
  status: AttendantStatus;
  isEnabled: boolean;
  agentSlots?: number;
  lastServiceDate?: string;
}
