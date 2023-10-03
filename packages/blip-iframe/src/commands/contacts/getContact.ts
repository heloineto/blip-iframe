import sendCommand from '../../actions/sendCommand';
import buildURI from '../../lib/utils/buildURI';
import { BlipContact } from './_types';

export interface GetContactParams {
  identity: string;
}

/**
 * Gets contact information
 */
export default async function getContact({ identity }: GetContactParams) {
  const uri = buildURI({
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
