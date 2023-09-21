import { IframeMessageProxy } from 'iframe-message-proxy';
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

  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        command: {
          method: 'get',
          uri: uri,
        },
      },
    })) as WrappedGetContactResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetContactResponse {
  response: GetContactResponse;
  trackingProperties: { id: string };
}

export type GetContactResponse = BlipContact;
