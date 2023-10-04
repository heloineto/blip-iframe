import type { GetTicketsResponseItem } from 'blip-iframe';
import { blip } from 'blip-iframe';
import blipQueryFn from 'pages/Home/utils/queryFn';

export async function getMessages(ticket: GetTicketsResponseItem) {
  const isTunnel = ticket.customerIdentity.endsWith('@tunnel.msging.net');

  if (!isTunnel) {
    return await blipQueryFn(
      blip.getThreads({
        identity: ticket.customerIdentity,
      })
    );
  }

  const tunnelAccount = await blipQueryFn(
    blip.getTunnelAccount({
      identity: ticket.customerIdentity,
    })
  );

  if (!tunnelAccount) {
    throw new Error(
      `Tunnel account for customerIdentity "${ticket.customerIdentity}" not found`
    );
  }

  return await blipQueryFn(
    blip.getThreads({
      identity: tunnelAccount.alternativeAccount,
      ownerIdentity: tunnelAccount.extras['tunnel.owner'] as string,
      merged: true,
    })
  );
}
