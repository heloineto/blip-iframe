import { Flex, Text } from '@mantine/core';

interface Props {
  name: string;
}

export default function TicketHeaderContactInner({ name }: Props) {
  return (
    <Flex direction="column" align="center">
      <Text size="10px" fw={700} tt="uppercase" c="dimmed">
        Contact
      </Text>
      <Text size="sm" fw={500} mt={-5}>
        {name}
      </Text>
    </Flex>
  );
}
