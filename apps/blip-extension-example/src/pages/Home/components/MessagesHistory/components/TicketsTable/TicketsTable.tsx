import { Loader } from '@mantine/core';
import useTickets from '../../../../queries/useTickets';
import TicketsDataTable from './components/TicketsDataTable';

export default function TicketsTable() {
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
        <TicketsDataTable tickets={ticketsQuery.data.items} />
      )}
    </div>
  );
}
