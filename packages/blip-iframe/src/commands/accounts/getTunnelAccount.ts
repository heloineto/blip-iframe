// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { Sender, TO_TUNNEL_URL } from '../../lib';
import { buildURI } from '../../lib/utils/buildURI';

export interface GetTunnelAccountParams {
  identity: string;
}

export async function getTunnelAccount(
  { identity }: GetTunnelAccountParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['accounts', identity],
  });

  return await sendCommand<GetTunnelAccountResponse>(
    {
      command: {
        method: 'get',
        to: TO_TUNNEL_URL,
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
