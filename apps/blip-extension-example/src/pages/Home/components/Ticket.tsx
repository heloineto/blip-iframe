import { useQuery } from '@tanstack/react-query';
import { blip } from 'blip-iframe';
import useTickets from '../queries/useTickets';
import blipQueryFn from '../utils/queryFn';

interface Props {
  selectedTicketId: string | null;
}

export default function Ticket({ selectedTicketId }: Props) {
  return (
    <div className="flex flex-col rounded bg-slate-800 p-5">
      {!selectedTicketId ? (
        <div className="flex grow items-center justify-center text-slate-300">
          Selecione um ticket para ver mais detalhes
        </div>
      ) : (
        <TicketInner ticketId={selectedTicketId} />
      )}
    </div>
  );
}

function TicketInner({ ticketId }: { ticketId: string }) {
  const ticketsQuery = useTickets();
  const ticket = ticketsQuery.data?.items.find((t) => t.id === ticketId);

  const tunnelAccountIdentity = ticket?.customerIdentity;

  const tunnelAccountQuery = useQuery({
    queryKey: ['getTunnelAccount', tunnelAccountIdentity],
    queryFn: () =>
      blipQueryFn(
        blip.getTunnelAccount({ identity: tunnelAccountIdentity ?? '' })
      ),
    enabled: !!tunnelAccountIdentity,
  });

  const threadsIdentity = tunnelAccountQuery.data?.alternativeAccount;

  const threadsQuery = useQuery({
    queryKey: ['getThreads', threadsIdentity],
    queryFn: () =>
      blipQueryFn(blip.getThreads({ identity: threadsIdentity ?? '' })),
    enabled: !!threadsIdentity,
  });

  console.log('tunnelAccountQuery', tunnelAccountQuery.data);
  console.log('threadsQuery', threadsQuery.data);

  // const threadsQuery = useQuery({
  //   queryKey: ['getThreads'],
  //   queryFn: () => blipQueryFn(blip.getThreads({ identity })),
  // });

  return <div>Hi</div>;
}
