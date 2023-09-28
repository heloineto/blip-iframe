import { Flex, Paper, ScrollArea, Text } from '@mantine/core';
import Information from './components/Information';
interface Props {
  selectedTicketId: string | null;
}

export default function Ticket({ selectedTicketId }: Props) {
  return (
    <Paper
      shadow="xs"
      className="flex h-[calc(100vh-80px)] flex-col overflow-auto"
    >
      <ScrollArea px="md">
        <Flex direction="column" py="md">
          {!selectedTicketId ? (
            <Text className="flex grow items-center justify-center">
              Selecione um ticket para ver mais detalhes
            </Text>
          ) : (
            <Information ticketId={selectedTicketId} />
          )}
        </Flex>
      </ScrollArea>
    </Paper>
  );
}
