import { useMantineTheme } from '@mantine/core';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { GetTicketsHistoryResponse } from 'blip-iframe';
import { blip } from 'blip-iframe';
import { DataTable } from 'mantine-datatable';
import blipQueryFn from 'pages/Home/utils/queryFn';
import { useRef } from 'react';
import useMessagesHistory from '../../../../context/MessagesHistoryContext/useMessagesHistory';
import AttendantCell from './component/AttendantCell';
import { useAttendantQueries } from './hooks/useAttendantQueries';
import { useContactQueries } from './hooks/useContactQueries';
import { PAGE_SIZE } from './utils/components';
import getTicketRecords from './utils/getTicketRecords';
import { placeholderRecords } from './utils/placeholderRecords';

export default function TicketsTable() {
  const theme = useMantineTheme();
  const { selectedTicket, setSelectedTicket } = useMessagesHistory();
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  const ticketsQuery = useInfiniteQuery({
    queryKey: ['getTicketsHistory'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = (await blipQueryFn(
        blip.getTicketsHistory({
          filter:
            "storageDate ge datetimeoffset'2023-09-02T03:00:00.000Z' and storageDate le datetimeoffset'2023-10-04T02:59:00.000Z' and status ne 'Open' and status ne 'Waiting'",
          take: PAGE_SIZE,
          skip: PAGE_SIZE * pageParam,
        })
      )) as GetTicketsHistoryResponse;

      return response.items;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const tickets = ticketsQuery.data?.pages.flat() ?? [];

  const attendantQueries = useAttendantQueries(tickets);
  const contactQueries = useContactQueries(tickets);

  const fetchingTickets = ticketsQuery.isLoading;
  const fetchingAttendants = !!attendantQueries.find((q) => q.isLoading);
  const fetchingContacts = !!contactQueries.find((q) => q.isLoading);

  const records = getTicketRecords(tickets, attendantQueries, contactQueries);

  if (ticketsQuery.isError) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        Error fetching tickets
      </div>
    );
  }

  return (
    <DataTable
      minHeight={200}
      withBorder
      borderRadius="sm"
      fetching={
        fetchingTickets ||
        fetchingAttendants ||
        fetchingContacts ||
        ticketsQuery.isFetchingNextPage
      }
      striped
      records={!fetchingTickets ? records : placeholderRecords}
      onScrollToBottom={() => ticketsQuery.fetchNextPage()}
      scrollViewportRef={scrollViewportRef}
      columns={[
        {
          accessor: 'attendant',
          render: (record) => (
            <AttendantCell
              attendant={record.attendant}
              avatar={record.attendantPhoto}
            />
          ),
          width: 100 * 2,
          ellipsis: true,
        },
        { accessor: 'contact', width: 100, textAlignment: 'center' },
        {
          accessor: 'sequentialId',
          title: 'Id',
          textAlignment: 'right',
          width: 100,
        },
      ]}
      onRowClick={(record) => {
        const newSelectedTicket = tickets.find((t) => t.id === record.id);

        if (!newSelectedTicket) {
          // TODO: Show error toast
          return;
        }

        setSelectedTicket(newSelectedTicket);
      }}
      rowStyle={(record) =>
        selectedTicket?.id === record.id
          ? {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.blue[8]
                  : theme.colors.blue[4],
              cursor: 'pointer',
            }
          : undefined
      }
    />
  );
}
