import useTickets from '../../queries/useTickets';
import Message from './components/Message';
import useMessages from './hooks/useMessages';
import formatMessages from './utils/formatMessages';
interface Props {
  selectedTicketId: string | null;
}

export default function Messages({ selectedTicketId }: Props) {
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

  if (!ticket) {
    throw new Error(`Ticket ${ticketId} not found`);
  }

  const messagesQuery = useMessages({
    ticket,
  });

  if (messagesQuery.isLoading) {
    return <div>Carregando...</div>;
  }

  if (messagesQuery.isError || !messagesQuery.data) {
    return <div>Erro ao carregar mensagens</div>;
  }

  const messages = formatMessages(messagesQuery.data.items);

  return (
    <div>
      <ul className="flex flex-col gap-3">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </div>
  );
}
