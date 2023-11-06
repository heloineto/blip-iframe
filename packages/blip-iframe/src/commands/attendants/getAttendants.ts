import { sendCommand } from '../../actions/sendCommand';
import {
  GetListParams,
  parseListParams,
} from '../../lib/shared/parseListParams';
import { buildURI } from '../../lib/utils';

export interface GetAttendantsParams extends GetListParams {}

/**
 * Gets a list of attendants in the Blip platform.
 * @param params The getAttendants parameters.
 * @returns A promise that resolves to a list of attendants.
 */
export async function getAttendants({
  ...listParams
}: GetAttendantsParams = {}) {
  const uri = buildURI({
    paths: ['attendants'],
    params: parseListParams(listParams),
  });

  return await sendCommand<GetAttendantsResponse>({
    command: {
      method: 'get',
      to: 'postmaster@desk.msging.net',
      uri,
    },
  });
}

export interface GetAttendantsResponse {
  total: number;
  itemType: string;
  items: GetAttendantsItem[];
}

export interface GetAttendantsItem {
  identity: string;
  fullName: string;
  email: string;
  teams: string[];
  status: string;
  isEnabled: boolean;
  agentSlots?: number;
  lastServiceDate?: string;
}
