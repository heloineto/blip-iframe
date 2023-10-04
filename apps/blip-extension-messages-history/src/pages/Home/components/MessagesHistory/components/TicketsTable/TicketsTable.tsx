import { CloseOutline } from '@blip-ds/react-icons';
import { ActionIcon, Flex, Stack, Text, Title, Tooltip } from '@mantine/core';
import useMessagesHistory from '../../context/MessagesHistoryContext/useMessagesHistory';
import { OptionsBar } from './components/OptionsBar/OptionsBar';
import TicketsDataTable from './components/TicketsDataTable';

export default function TicketsTable() {
  const { onCloseDrawer } = useMessagesHistory();

  return (
    <Flex direction="column" gap="sm" style={{ flex: 1 }}>
      <Flex justify="space-between" align="center">
        <Stack spacing={0}>
          <Title order={2} size="h4">
            Messages History
          </Title>
          <Text>Select a ticket to see the messages history</Text>
        </Stack>
        <Tooltip label="Close" withArrow>
          <ActionIcon onClick={onCloseDrawer}>
            <CloseOutline />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <OptionsBar />
      <TicketsDataTable />
    </Flex>
  );
}
