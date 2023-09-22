import { sendCommand } from '../../actions';
import { buildUri } from '../../lib/utils';

export interface GetTunnelAccountParams {
  identity: string;
}

export default async function getTunnelAccount({
  identity,
}: GetTunnelAccountParams) {
  const uri = buildUri({
    paths: ['accounts', identity],
  });

  return await sendCommand<GetTunnelAccountResponse>({
    command: {
      method: 'get',
      to: 'postmaster@tunnel.msging.net',
      uri: uri,
    },
  });
}

export type GetTunnelAccountResponse = {
  fullName: string;
  alternativeAccount: string;
  identity: string;
  extras: Record<string, unknown>;
  source: string;
};
