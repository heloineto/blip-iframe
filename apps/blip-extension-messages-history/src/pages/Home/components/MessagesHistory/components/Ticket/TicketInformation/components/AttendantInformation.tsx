import { Flex, Title } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import useAttendant from '../../../../../../queries/useAttendant';

interface Props {
  attendantId: string;
}

export default function AttendantInformation({ attendantId }: Props) {
  const attendantQuery = useAttendant({ params: { identity: attendantId } });

  if (attendantQuery.isError) {
    return <div>Error fetching attendant</div>;
  }

  const attendant = attendantQuery.data;

  return (
    <Flex direction="column" gap="sm" pb="sm">
      <Flex direction="column" gap="sm">
        <Title order={2} size="h4">
          Attendant information
        </Title>
        <DataTable
          withBorder
          borderRadius="sm"
          verticalSpacing="sm"
          withColumnBorders
          striped
          noHeader
          fetching={attendantQuery.isLoading}
          records={[
            { name: 'Name', value: attendant?.fullName ?? 'N/A' },
            { name: 'E-mail', value: attendant?.email ?? 'N/A' },
            { name: 'Phone number', value: attendant?.phoneNumber ?? 'N/A' },
            { name: 'Culture', value: attendant?.culture ?? 'N/A' },
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
