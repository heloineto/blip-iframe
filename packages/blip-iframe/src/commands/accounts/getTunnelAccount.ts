import sendCommand from '../../actions/sendCommand';
import buildURI from '../../lib/utils/buildURI';

export interface GetTunnelAccountParams {
  identity: string;
}

export async function getTunnelAccount({ identity }: GetTunnelAccountParams) {
  const uri = buildURI({
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
