import { Text } from '@mantine/core';
import useMessagesHistory from '../../../context/MessagesHistoryContext/useMessagesHistory';
import Information from './components/Information';

export default function TicketInformation() {
  const { selectedTicket } = useMessagesHistory();

  return !selectedTicket ? (
    <Text className="flex grow items-center justify-center">
      Selecione um ticket para ver mais detalhes
    </Text>
  ) : (
    <Information ticket={selectedTicket} />
  );
}
