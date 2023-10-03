import { Avatar, Flex, Loader, Text } from '@mantine/core';
import useAttendant from '../../../../../../queries/useAttendant';

interface Props {
  attendantId: string;
}

export default function TicketHeaderAttendant({ attendantId }: Props) {
  const attendantQuery = useAttendant({ params: { identity: attendantId } });

  if (attendantQuery.isLoading) {
    return <Loader />;
  }

  if (attendantQuery.isError || !attendantQuery.data) {
    return <div>Error fetching attendant</div>;
  }

  const attendant = attendantQuery.data;

  return (
    <Flex gap="sm" align="center">
      <Avatar src={attendant.photoUri} radius="xl" />
      <Flex direction="column" style={{ flex: 1 }}>
        <Text size="10px" fw={700} tt="uppercase" c="dimmed">
          Attendant
        </Text>
        <Text size="sm" fw={500} mt={-5}>
          {attendant.fullName ?? attendant.identity ?? 'N/A'}
        </Text>
      </Flex>
    </Flex>
  );
}
