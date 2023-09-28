import { Loader } from '@mantine/core';
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

  return ticketsQuery.isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      {ticketsQuery.isError || !ticketsQuery.data ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
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
  );
}
