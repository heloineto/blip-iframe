import { IframeMessageProxy } from 'iframe-message-proxy';
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

  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        command: {
          method: 'get',
          uri: uri,
        },
      },
    })) as WrappedGetContactsResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetContactsResponse {
  response: GetContactsResponse;
  trackingProperties: { id: string };
}

export interface GetContactsResponse {
  total: number;
  itemType: string;
  items: BlipContact[];
}
