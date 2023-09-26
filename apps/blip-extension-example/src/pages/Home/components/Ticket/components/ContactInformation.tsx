import { Flex, Title } from '@mantine/core';
import type { GetTicketsResponseItem } from 'blip-iframe';
import { DataTable } from 'mantine-datatable';
import useAttendant from '../../../queries/useAttendant';
import useContact from '../../../queries/useContact';

interface Props {
  ticket: GetTicketsResponseItem;
}

export default function ContactInformation({ ticket }: Props) {
  const contactId = ticket.customerIdentity;
  const attendantId = ticket.agentIdentity;

  const contactQuery = useContact({ params: { identity: contactId } });
  const attendantQuery = useAttendant({ params: { identity: attendantId } });

  if (contactQuery.isLoading || attendantQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (contactQuery.isError || attendantQuery.isError) {
    return <div>Error</div>;
  }

  const contact = contactQuery.data;

  return (
    <Flex direction="column" gap="sm">
      <Flex direction="column" gap="sm">
        <Title order={2} size="h4">
          Contact information
        </Title>
        <DataTable
          withBorder
          borderRadius="sm"
          withColumnBorders
          striped
          noHeader
          records={[
            { name: 'Name', value: contact.name ?? 'N/A' },
            { name: 'E-mail', value: contact.email ?? 'N/A' },
            { name: 'Phone number', value: contact.phoneNumber ?? 'N/A' },
            { name: 'Culture', value: contact.culture ?? 'N/A' },
            {
              name: 'Tunnel originator',
              value: contact.extras?.['tunnel.originator'] ?? 'N/A',
            },
            {
              name: 'Tunnel owner',
              value: contact.extras?.['tunnel.owner'] ?? 'N/A',
            },
            {
              name: 'Type of compile',
              value: contact.extras?.['typeOfCompile'] ?? 'N/A',
            },
            {
              name: 'Group',
              value: contact.group ?? 'N/A',
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
