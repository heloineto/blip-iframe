import { sendCommand } from '../../actions/sendCommand';
import { TUNNEL_POSTMASTER_URL, sendMessage } from '../../lib';
import buildURI from '../../lib/utils/buildURI';

export interface GetTunnelAccountParams {
  identity: string;
}

export async function getTunnelAccount(
  { identity }: GetTunnelAccountParams,
  sender = sendMessage
) {
  const uri = buildURI({
    paths: ['accounts', identity],
  });

  return await sendCommand<GetTunnelAccountResponse>(
    {
      command: {
        method: 'get',
        to: TUNNEL_POSTMASTER_URL,
        uri: uri,
      },
    },
    sender
  );
}

export type GetTunnelAccountResponse = {
  fullName: string;
  alternativeAccount: string;
  identity: string;
  extras: Record<string, unknown>;
  source: string;
};
