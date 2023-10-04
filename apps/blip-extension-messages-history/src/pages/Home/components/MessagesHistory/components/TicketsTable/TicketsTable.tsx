import {
  CloseOutline,
  FilterOutline,
  RefreshOutline,
} from '@blip-ds/react-icons';
import { ActionIcon, Flex, Stack, Text, Title, Tooltip } from '@mantine/core';
import useMessagesHistory from '../../context/MessagesHistoryContext/useMessagesHistory';
import { MoreOptions } from './components/MoreOptions';
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
      <Flex justify="space-between" align="center">
        <ActionIcon>
          <FilterOutline size="1.125rem" />
        </ActionIcon>
        <Flex gap="sm">
          <ActionIcon>
            <RefreshOutline size="1.125rem" />
          </ActionIcon>
          <MoreOptions />
        </Flex>
      </Flex>
      <TicketsDataTable />
    </Flex>
  );
}
