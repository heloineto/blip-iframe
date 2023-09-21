import { IframeMessageProxy } from 'iframe-message-proxy';
import { buildUri } from '../../lib/utils';

export interface GetTunnelAccountParams {
  identity: string;
}

export default async function getTunnelAccount({
  identity,
}: GetTunnelAccountParams) {
  try {
    const uri = buildUri({
      paths: ['accounts', identity],
    });

    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        command: {
          method: 'get',
          to: 'postmaster@tunnel.msging.net',
          uri: uri,
        },
      },
    })) as WrappedGetTunnelAccountResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetTunnelAccountResponse {
  response: GetTunnelAccountResponse;
  trackingProperties: { id: string };
}

export type GetTunnelAccountResponse = {
  fullName: string;
  alternativeAccount: string;
  identity: string;
  extras: Record<string, unknown>;
  source: string;
};
