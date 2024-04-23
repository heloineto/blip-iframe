import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';
import { Contact } from './types';

export interface GetContactsParams extends ListParams, BuildParams {}

/**
 * Gets contacts information
 * @param params - The parameters for the function
 * @returns A promise that resolves to a list of contacts.
 */
export async function getContacts(
  { filter, skip, take, ...buildParams }: GetContactsParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['contacts'],
    params: {
      $filter: filter || undefined,
      $skip: skip,
      $take: take,
    },
    ...buildParams,
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
