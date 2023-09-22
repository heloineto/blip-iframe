import { sendCommand } from '../../actions';
import { buildUri } from '../../lib/utils';
import { BlipContact } from './_types';

export interface GetContactsParams {
  skip?: number;
  take?: number;
}

/**
 * Gets contact information
 */
export default async function getContacts({
  skip,
  take,
}: GetContactsParams = {}) {
  const uri = buildUri({
    paths: ['contacts'],
    params: { $skip: skip, $take: take },
  });

  return await sendCommand<GetContactsResponse>({
    command: {
      method: 'get',
      uri: uri,
    },
  });
}

export interface GetContactsResponse {
  total: number;
  itemType: string;
  items: BlipContact[];
}
