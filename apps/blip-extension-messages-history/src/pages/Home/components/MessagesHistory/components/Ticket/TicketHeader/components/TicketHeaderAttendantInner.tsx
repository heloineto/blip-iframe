import { Avatar, Flex, Text } from '@mantine/core';

interface Props {
  avatar?: string;
  name: string;
}

export default function TicketHeaderAttendantInner({ avatar, name }: Props) {
  return (
    <Flex gap="sm" align="center">
      <Avatar src={avatar} radius="xl" />
      <Flex direction="column" style={{ flex: 1, overflow: 'hidden' }}>
        <Text size="10px" fw={700} tt="uppercase" c="dimmed">
          Attendant
        </Text>
        <Text
          size="sm"
          fw={500}
          mt={-5}
          style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {name}
        </Text>
      </Flex>
    </Flex>
  );
}
