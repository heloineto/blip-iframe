import { ArrowLeftOutline } from '@blip-ds/react-icons';
import {
  ActionIcon,
  Badge,
  Divider,
  Flex,
  Text,
  useMantineTheme,
} from '@mantine/core';
import useMessagesHistory from '../../../context/MessagesHistoryContext/useMessagesHistory';
import TicketHeaderAttendant from './components/TicketHeaderAttendant';
import TicketHeaderAttendantInner from './components/TicketHeaderAttendantInner';
import TicketHeaderContact from './components/TicketHeaderContact';
import TicketHeaderContactInner from './components/TicketHeaderContactInner';

export default function TicketHeader() {
  const theme = useMantineTheme();
  const { setSelectedTicket, selectedTicket } = useMessagesHistory();
  const ticket = selectedTicket;

  if (!ticket) {
    return <div>Error: Ticket not found</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '28px 214px 1px 107px 1px 107px',
        flexShrink: 0,
        alignItems: 'center',
        width: 480,
        marginLeft: -16,
        marginRight: -16,
        paddingLeft: 6,
        paddingRight: 16,
        overflow: 'hidden',
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      }}
    >
      <ActionIcon
        onClick={() => {
          setSelectedTicket(null);
        }}
      >
        <ArrowLeftOutline />
      </ActionIcon>

      {ticket.agentIdentity ? (
        <TicketHeaderAttendant attendantId={ticket.agentIdentity} />
      ) : (
        <TicketHeaderAttendantInner name="N/A" />
      )}
      <Divider orientation="vertical" />
      {ticket.customerIdentity ? (
        <TicketHeaderContact contactId={ticket.customerIdentity} />
      ) : (
        <TicketHeaderContactInner name="N/A" />
      )}
      <Divider orientation="vertical" />
      <Flex direction="column" align="center">
        <Text size="10px" fw={700} tt="uppercase" c="dimmed">
          Ticket
        </Text>
        <Badge>{`#${ticket.sequentialId}`}</Badge>
      </Flex>
    </div>
  );
}
