import { Flex, Loader, Paper, ScrollArea } from '@mantine/core';
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

  return (
    <Paper
      shadow="xs"
      className="flex h-[calc(100vh-80px)] flex-col overflow-auto"
    >
      <ScrollArea px="md">
        <Flex direction="column" py="md">
          {ticketsQuery.isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div>
              {ticketsQuery.isError || !ticketsQuery.data ? (
                <div className="flex grow items-center justify-center">
                  Error
                </div>
              ) : (
                <TicketsTable
                  tickets={ticketsQuery.data.items}
                  selectedTicketId={selectedTicketId}
                  setSelectedTicketId={setSelectedTicketId}
                />
              )}
            </div>
          )}
        </Flex>
      </ScrollArea>
    </Paper>
  );
}
