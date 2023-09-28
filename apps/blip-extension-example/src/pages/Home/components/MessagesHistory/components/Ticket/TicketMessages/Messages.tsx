import { Text } from '@mantine/core';
import MessagesContainer from './components/MessagesContainer';
interface Props {
  selectedTicketId: string | null;
}

export default function Messages({ selectedTicketId }: Props) {
  return !selectedTicketId ? (
    <Text className="flex grow items-center justify-center">
      Selecione um ticket para ver mais detalhes
    </Text>
  ) : (
    <MessagesContainer ticketId={selectedTicketId} />
  );
}
