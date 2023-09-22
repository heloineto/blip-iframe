import { useQuery } from '@tanstack/react-query';
import { blip } from 'blip-iframe';
import clsx from 'clsx';
import useTickets from '../queries/useTickets';
import blipQueryFn from '../utils/queryFn';

interface Props {
  selectedTicketId: string | null;
}

export default function Ticket({ selectedTicketId }: Props) {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col overflow-auto rounded bg-slate-800 p-5">
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
  const ownerIdentity = tunnelAccountQuery.data?.extras[
    'tunnel.owner'
  ] as string;

  const threadsQuery = useQuery({
    queryKey: ['getThreads', threadsIdentity],
    queryFn: () =>
      blipQueryFn(
        blip.getThreads({
          identity: threadsIdentity ?? '',
          merged: true,
          ownerIdentity,
        })
      ),
    enabled: !!threadsIdentity && !!ownerIdentity,
  });

  if (threadsQuery.isLoading) return <div>Carregando...</div>;
  if (threadsQuery.isError || !threadsQuery.data)
    return <div>Erro ao carregar threads</div>;

  const threads = threadsQuery.data.items.reverse();
  console.log('threads', threads);

  return (
    <div>
      <ul className="flex flex-col gap-3">
        {threads.map((thread) => {
          if (typeof thread.content !== 'string') return null;

          const isSent = thread.direction === 'sent';

          return (
            <li
              key={thread.id}
              className={clsx('flex', isSent ? 'justify-end' : '')}
            >
              <div
                className={clsx(
                  'w-fit whitespace-pre-wrap rounded px-3 py-1.5',
                  isSent ? 'bg-blue-800' : 'bg-slate-950'
                )}
              >
                {thread.content}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
