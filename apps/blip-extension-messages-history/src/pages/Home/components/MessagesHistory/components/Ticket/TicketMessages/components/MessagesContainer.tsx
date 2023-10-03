import { Box } from '@mantine/core';
import useTickets from '../../../../../../queries/useTickets';
import useMessages from '../hooks/useMessages';
import formatMessages from '../utils/formatMessages';
import Message from './Message';

interface Props {
  ticketId: string;
}

export default function MessagesContainer({ ticketId }: Props) {
  const ticketsQuery = useTickets({
    params: {},
  });
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
