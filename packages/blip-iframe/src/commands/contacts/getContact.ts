import { sendCommand } from '../../actions';
import { buildUri } from '../../lib/utils';
import { BlipContact } from './_types';

export interface GetContactParams {
  identity: string;
}

/**
 * Gets contact information
 */
export default async function getContact({ identity }: GetContactParams) {
  const uri = buildUri({
    paths: ['contacts', identity],
  });

  return await sendCommand<GetContactResponse>({
    command: {
      method: 'get',
      uri: uri,
    },
  });
}

export type GetContactResponse = BlipContact;
