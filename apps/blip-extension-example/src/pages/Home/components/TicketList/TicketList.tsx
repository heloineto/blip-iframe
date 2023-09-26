import { Flex, Paper, ScrollArea } from '@mantine/core';
import type { Dispatch, SetStateAction } from 'react';
import useTickets from '../../queries/useTickets';
import TicketsTable from './components/TicketsTable';

interface Props {
  selectedTicketId: string | null;
  setSelectedTicketId: Dispatch<SetStateAction<string | null>>;
}

export default function TicketList({
  selectedTicketId,
  setSelectedTicketId,
}: Props) {
  const ticketsQuery = useTickets();

  if (ticketsQuery.isLoading) return <div>Loading...</div>;
  if (ticketsQuery.isError || !ticketsQuery.data) return <div>Error</div>;

  return (
    <Paper
      shadow="xs"
      className="flex h-[calc(100vh-80px)] flex-col overflow-auto"
    >
      <ScrollArea px="md">
        <Flex direction="column" py="md">
          <TicketsTable
            tickets={ticketsQuery.data.items}
            selectedTicketId={selectedTicketId}
            setSelectedTicketId={setSelectedTicketId}
          />
        </Flex>
      </ScrollArea>
    </Paper>
  );
}
