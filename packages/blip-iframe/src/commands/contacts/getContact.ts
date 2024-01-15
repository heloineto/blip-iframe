// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import buildURI from '../../lib/utils/buildURI';
import { Contact } from './types';

export interface GetContactParams {
  /**
   * The contact's identity
   */
  identity: string;
}

/**
 * Gets contact information
 */
export async function getContact(
  { identity }: GetContactParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['contacts', identity],
  });

  return await sendCommand<GetContactResponse>(
    {
      command: {
        method: 'get',
        uri,
      },
    },
    sender
  );
}

export type GetContactResponse = Contact;
