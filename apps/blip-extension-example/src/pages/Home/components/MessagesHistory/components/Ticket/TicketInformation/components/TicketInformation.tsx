import { Flex, Title } from '@mantine/core';
import type { GetTicketsResponseItem } from 'blip-iframe';
import dayjs from 'dayjs';
import { DataTable } from 'mantine-datatable';

function formatDate(date: string | undefined) {
  if (!date) return 'N/A';

  const parsed = dayjs(date);

  if (!parsed.isValid()) return 'N/A';

  return parsed.format('DD/MM/YYYY HH:mm:ss');
}

interface Props {
  ticket: GetTicketsResponseItem;
}

export default function TicketInformation({ ticket }: Props) {
  return (
    <Flex direction="column" gap="sm">
      <Flex direction="column" gap="sm">
        <Title order={2} size="h4">
          Ticket information
        </Title>
        <DataTable
          withBorder
          borderRadius="sm"
          verticalSpacing="xs"
          withColumnBorders
          striped
          noHeader
          records={[
            { name: 'Close date', value: formatDate(ticket.closeDate) },
            {
              name: 'First response date',
              value: formatDate(ticket.firstResponseDate),
            },
            {
              name: 'Open date',
              value: formatDate(ticket.openDate),
            },
            { name: 'Closed', value: ticket.closed?.toString() ?? 'N/A' },
            { name: 'Closed by', value: ticket.closedBy ?? 'N/A' },
            {
              name: 'Customer domain',
              value: ticket.customerDomain ?? 'N/A',
            },
            {
              name: 'Is automatic distribution',
              value: ticket.isAutomaticDistribution?.toString() ?? 'N/A',
            },
            {
              name: 'Priority',
              value: ticket.priority ?? 'N/A',
            },
            {
              name: 'Provider',
              value: ticket.provider ?? 'N/A',
            },
            {
              name: 'Rating',
              value: ticket.rating ?? 'N/A',
            },
            {
              name: 'Status',
              value: ticket.status ?? 'N/A',
            },
            {
              name: 'Unread messages',
              value: ticket.unreadMessages ?? 'N/A',
            },
            {
              name: 'Team',
              value: ticket.team ?? 'N/A',
            },
            {
              name: 'Id',
              value: ticket.sequentialId ? `#${ticket.sequentialId}` : 'N/A',
            },
          ]}
          columns={[
            { accessor: 'name', width: 150 },
            { accessor: 'value', cellsStyle: { wordBreak: 'break-all' } },
          ]}
          idAccessor="name"
        />
      </Flex>
    </Flex>
  );
}
