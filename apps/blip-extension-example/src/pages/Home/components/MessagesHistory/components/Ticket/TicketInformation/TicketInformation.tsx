import { Text } from '@mantine/core';
import useMessagesHistory from '../../../context/MessagesHistoryContext/useMessagesHistory';
import Information from './components/Information';

export default function TicketInformation() {
  const { selectedTicketId } = useMessagesHistory();

  return !selectedTicketId ? (
    <Text className="flex grow items-center justify-center">
      Selecione um ticket para ver mais detalhes
    </Text>
  ) : (
    <Information ticketId={selectedTicketId} />
  );
}
