import { Flex, Text, Tooltip } from '@mantine/core';

interface Props {
  name: string;
}

export default function TicketHeaderContactInner({ name }: Props) {
  return (
    <Flex direction="column" align="center">
      <Text size="10px" fw={700} tt="uppercase" c="dimmed">
        Contact
      </Text>
      <Tooltip label={name}>
        <Text
          size="sm"
          fw={500}
          mt={-5}
          style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {name}
        </Text>
      </Tooltip>
    </Flex>
  );
}
