import { Box } from '@mantine/core';
import type { GetTicketsResponseItem } from 'blip-iframe';
import useMessages from '../hooks/useMessages';
import formatMessages from '../utils/formatMessages';
import Message from './Message';

interface Props {
  ticket: GetTicketsResponseItem;
}

export default function MessagesContainer({ ticket }: Props) {
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

  if (!messages.length) {
    return <div>Nenhuma mensagem encontrada</div>;
  }

  return (
    <Box py="md">
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </Box>
  );
}
