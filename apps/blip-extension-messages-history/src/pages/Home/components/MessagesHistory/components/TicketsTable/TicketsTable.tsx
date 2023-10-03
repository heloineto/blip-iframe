import { CloseOutline } from '@blip-ds/react-icons';
import {
  ActionIcon,
  Flex,
  Loader,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import useTickets from '../../../../queries/useTickets';
import useMessagesHistory from '../../context/MessagesHistoryContext/useMessagesHistory';
import TicketsDataTable from './components/TicketsDataTable';

export default function TicketsTable() {
  const ticketsQuery = useTickets({
    params: {
      filter:
        "storageDate ge datetimeoffset'2023-09-02T03:00:00.000Z' and storageDate le datetimeoffset'2023-10-04T02:59:00.000Z' and status ne 'Open' and status ne 'Waiting'",
    },
  });
  const { onCloseDrawer } = useMessagesHistory();

  return (
    <Flex direction="column" gap="sm">
      <Flex justify="space-between" align="center">
        <Stack spacing={0}>
          <Title order={2} size="h4">
            Messages History
          </Title>
          <Text>Select a ticket to see the messages history</Text>
        </Stack>
        <Tooltip label="Close messages history" withArrow>
          <ActionIcon onClick={onCloseDrawer}>
            <CloseOutline />
          </ActionIcon>
        </Tooltip>
      </Flex>
      {ticketsQuery.isLoading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {ticketsQuery.isError || !ticketsQuery.data ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              Error fetching tickets
            </div>
          ) : (
            <TicketsDataTable tickets={ticketsQuery.data.items} />
          )}
        </div>
      )}
    </Flex>
  );
}
