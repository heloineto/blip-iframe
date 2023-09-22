import clsx from 'clsx';
import useThreads from '../queries/useThreads';
import useTickets from '../queries/useTickets';
import useTunnelAccount from '../queries/useTunnelAccount';

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

  const tunnelAccountQuery = useTunnelAccount({
    params: { identity: tunnelAccountIdentity as string },
    enabled: !!tunnelAccountIdentity,
  });

  const threadsIdentity = tunnelAccountQuery.data?.alternativeAccount;
  const ownerIdentity = tunnelAccountQuery.data?.extras['tunnel.owner'] as
    | string
    | undefined;
  const merged = true;

  const threadsQuery = useThreads({
    params: {
      identity: threadsIdentity as string,
      ownerIdentity: ownerIdentity as string,
      merged,
    },
    enabled: !!threadsIdentity && !!ownerIdentity,
  });

  if (threadsQuery.isLoading) return <div>Carregando...</div>;
  if (threadsQuery.isError || !threadsQuery.data)
    return <div>Erro ao carregar threads</div>;

  const threads = threadsQuery.data.items.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

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
                  'w-fit whitespace-pre-wrap rounded-lg px-3 py-1.5',
                  isSent
                    ? 'rounded-br-none bg-blue-800'
                    : 'rounded-bl-none bg-slate-950'
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
