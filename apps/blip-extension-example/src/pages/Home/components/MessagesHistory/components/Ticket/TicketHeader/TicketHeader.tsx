import { ArrowLeftOutline } from '@blip-ds/react-icons';
import {
  ActionIcon,
  Badge,
  Divider,
  Flex,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core';
import useTickets from '../../../../../queries/useTickets';
import useMessagesHistory from '../../../context/MessagesHistoryContext/useMessagesHistory';
import TicketHeaderAttendant from './components/TicketHeaderAttendant';
import TicketHeaderContact from './components/TicketHeaderContact';

// const contactId = ticket.customerIdentity;
// const contactQuery = useContact({ params: { identity: contactId } });

// if (contactQuery.isError) {
//   return <div>Error</div>;
// }

export default function TicketHeader() {
  const theme = useMantineTheme();
  const { setSelectedTicketId, selectedTicketId } = useMessagesHistory();
  const ticketsQuery = useTickets();
  const ticket = ticketsQuery.data?.items.find(
    (t) => t.id === selectedTicketId
  );

  if (!ticket) {
    return <div>Error: Ticket not found</div>;
  }

  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      }}
    >
      <Group>
        <ActionIcon
          style={{
            marginLeft: -10,
          }}
          onClick={() => {
            setSelectedTicketId(null);
          }}
        >
          <ArrowLeftOutline />
        </ActionIcon>
        {ticket.agentIdentity ? (
          <TicketHeaderAttendant attendantId={ticket.agentIdentity} />
        ) : null}
        <Flex justify="center" align="center" style={{ flex: 1, height: 38 }}>
          <Divider orientation="vertical" />
        </Flex>
        {ticket.customerIdentity ? (
          <TicketHeaderContact contactId={ticket.customerIdentity} />
        ) : null}
        <Flex justify="center" align="center" style={{ flex: 1, height: 38 }}>
          <Divider orientation="vertical" />
        </Flex>
        <Flex direction="column" align="center">
          <Text size="10px" fw={700} tt="uppercase" c="dimmed">
            Ticket
          </Text>
          <Badge>{`#${ticket.sequentialId}`}</Badge>
        </Flex>
        <Flex justify="center" align="center" style={{ flexGrow: 0.5 }} />
      </Group>
    </div>
  );
}
