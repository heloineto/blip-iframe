import { Avatar, Flex, Title, useMantineTheme } from '@mantine/core';
import { useQueries } from '@tanstack/react-query';
import type { GetTicketsResponseItem } from 'blip-iframe';
import { blip } from 'blip-iframe';
import { DataTable } from 'mantine-datatable';
import blipQueryFn from '../../../../../utils/queryFn';
import useMessagesHistory from '../../../context/MessagesHistoryContext/useMessagesHistory';

interface Props {
  tickets: GetTicketsResponseItem[];
}

export default function TicketsTable({ tickets }: Props) {
  const theme = useMantineTheme();
  const { selectedTicketId, setSelectedTicketId } = useMessagesHistory();

  const attendantQueries = useQueries({
    queries: tickets.map((ticket) => {
      const identity = ticket.agentIdentity;

      return {
        queryKey: ['getAttendant', { identity }],
        queryFn: () =>
          identity ? blipQueryFn(blip.getAttendant({ identity })) : null,
        staleTime: Infinity,
      };
    }),
  });

  const contactQueries = useQueries({
    queries: tickets.map((ticket) => {
      const params = { identity: ticket.customerIdentity };

      return {
        queryKey: ['getContact', params],
        queryFn: () => blipQueryFn(blip.getContact(params)),
        staleTime: Infinity,
      };
    }),
  });

  return (
    <Flex direction="column" gap="sm">
      <Title order={2} size="h4">
        Tickets
      </Title>
      <DataTable
        minHeight={200}
        withBorder
        borderRadius="sm"
        fetching={
          !!attendantQueries.find((q) => q.isLoading) ||
          !!contactQueries.find((q) => q.isLoading)
        }
        striped
        records={tickets.map((ticket, index) => {
          const attendant = attendantQueries[index].data;
          const contact = contactQueries[index].data;

          return {
            id: ticket.id,
            sequentialId: ticket.sequentialId
              ? `#${ticket.sequentialId}`
              : 'N/A',
            attendant: attendant?.fullName ?? attendant?.identity ?? 'N/A',
            attendantPhoto: attendant?.photoUri,
            contact: contact?.name ?? contact?.identity ?? 'N/A',
          };
        })}
        columns={[
          {
            accessor: 'attendant',
            render: (record) => (
              <Flex gap="sm" align="center">
                <Avatar
                  radius={999}
                  src={record.attendantPhoto}
                  alt={record.attendant}
                />
                {record.attendant}
              </Flex>
            ),
          },
          { accessor: 'contact' },
          { accessor: 'sequentialId', title: 'Id', textAlignment: 'right' },
        ]}
        onRowClick={(record) => setSelectedTicketId(record.id)}
        rowStyle={(record) =>
          selectedTicketId === record.id
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
    </Flex>
  );
}
