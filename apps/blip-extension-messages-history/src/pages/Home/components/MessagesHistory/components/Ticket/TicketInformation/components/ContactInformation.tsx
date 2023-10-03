import { Flex, Title } from '@mantine/core';
import type { GetTicketsResponseItem } from 'blip-iframe';
import { DataTable } from 'mantine-datatable';
import useContact from '../../../../../../queries/useContact';

interface Props {
  ticket: GetTicketsResponseItem;
}

export default function ContactInformation({ ticket }: Props) {
  const contactId = ticket.customerIdentity;

  const contactQuery = useContact({ params: { identity: contactId } });

  if (contactQuery.isError) {
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
          verticalSpacing="sm"
          withColumnBorders
          striped
          noHeader
          fetching={contactQuery.isLoading}
          records={[
            { name: 'Name', value: contact?.name ?? 'N/A' },
            { name: 'E-mail', value: contact?.email ?? 'N/A' },
            { name: 'Phone number', value: contact?.phoneNumber ?? 'N/A' },
            { name: 'Culture', value: contact?.culture ?? 'N/A' },
            {
              name: 'Tunnel originator',
              value: contact?.extras?.['tunnel.originator'] ?? 'N/A',
            },
            {
              name: 'Tunnel owner',
              value: contact?.extras?.['tunnel.owner'] ?? 'N/A',
            },
            {
              name: 'Type of compile',
              value: contact?.extras?.typeOfCompile ?? 'N/A',
            },
            {
              name: 'Group',
              value: contact?.group ?? 'N/A',
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
