import { Text } from '@mantine/core';
import useMessagesHistory from '../../../context/MessagesHistoryContext/useMessagesHistory';
import MessagesContainer from './components/MessagesContainer';

export default function TicketMessages() {
  const { selectedTicket } = useMessagesHistory();

  return !selectedTicket ? (
    <Text className="flex grow items-center justify-center">
      Selecione um ticket para ver mais detalhes
    </Text>
  ) : (
    <MessagesContainer ticket={selectedTicket} />
  );
}
