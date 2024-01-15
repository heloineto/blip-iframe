import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import {
  GetListParams,
  parseListParams,
} from '../../lib/shared/parseListParams';
import buildURI from '../../lib/utils/buildURI';
import { Contact } from './types';

export interface GetContactsParams extends GetListParams {}

/**
 * Gets contacts information
 * @param params - The parameters for the function
 * @returns A promise that resolves to a list of contacts.
 */
export async function getContacts(
  { ...listParams }: GetContactsParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['contacts'],
    params: parseListParams(listParams),
  });

  return await sendCommand<GetContactsResponse>(
    {
      command: {
        method: 'get',
        uri,
      },
    },
    sender
  );
}

export interface GetContactsResponse {
  total?: number;
  itemType: string;
  items: GetContactsItem[];
}

export type GetContactsItem = Contact;
