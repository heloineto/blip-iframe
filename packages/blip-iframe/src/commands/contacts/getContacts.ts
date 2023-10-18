import { sendCommand } from '../../actions/sendCommand';
import {
  GetListParams,
  parseListParams,
} from '../../lib/shared/parseListParams';
import buildURI from '../../lib/utils/buildURI';
import { BlipContact } from './_types';

export interface GetContactsParams extends GetListParams {}

/**
 * Gets contact information
 */
export async function getContacts({ ...listParams }: GetContactsParams = {}) {
  const uri = buildURI({
    paths: ['contacts'],
    params: parseListParams(listParams),
  });

  return await sendCommand<GetContactsResponse>({
    command: {
      method: 'get',
      uri,
    },
  });
}

export interface GetContactsResponse {
  total: number;
  itemType: string;
  items: BlipContact[];
}
