import { Box, Paper, ScrollArea } from '@mantine/core';
import useTickets from '../../queries/useTickets';
import Message from './components/Message';
import useMessages from './hooks/useMessages';
import formatMessages from './utils/formatMessages';
interface Props {
  selectedTicketId: string | null;
}

export default function Messages({ selectedTicketId }: Props) {
  return (
    <Paper
      shadow="xs"
      className="flex h-[calc(100vh-80px)] flex-col overflow-auto"
    >
      <ScrollArea px="md">
        {!selectedTicketId ? (
          <div className="flex grow items-center justify-center text-slate-300">
            Selecione um ticket para ver mais detalhes
          </div>
        ) : (
          <TicketInner ticketId={selectedTicketId} />
        )}
      </ScrollArea>
    </Paper>
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
    <Box py="md">
      <ul className="flex flex-col gap-3">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </Box>
  );
}
