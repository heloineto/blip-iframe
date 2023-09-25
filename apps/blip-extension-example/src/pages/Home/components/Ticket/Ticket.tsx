import useTickets from '../../queries/useTickets';
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

  return <div />;
}
