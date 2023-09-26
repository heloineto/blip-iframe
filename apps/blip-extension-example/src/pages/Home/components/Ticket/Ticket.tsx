import { Flex, Paper, ScrollArea } from '@mantine/core';
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
            <div className="flex grow items-center justify-center text-slate-300">
              Selecione um ticket para ver mais detalhes
            </div>
          ) : (
            <Information ticketId={selectedTicketId} />
          )}
        </Flex>
      </ScrollArea>
    </Paper>
  );
}
