import { Flex } from '@mantine/core';
import useTickets from '../../../../../../queries/useTickets';
import AttendantInformation from './AttendantInformation';
import ContactInformation from './ContactInformation';
import TicketInformation from './TicketInformation';

interface Props {
  ticketId: string;
}

export default function Information({ ticketId }: Props) {
  const ticketsQuery = useTickets({
    // TODO: Fix types
    params: undefined,
  });
  const ticket = ticketsQuery.data?.items.find((t) => t.id === ticketId);

  if (!ticket) {
    return <div>Error: Ticket not found</div>;
  }

  const attendantId = ticket.agentIdentity;

  return (
    <Flex direction="column" gap="xl">
      <ContactInformation ticket={ticket} />
      <TicketInformation ticket={ticket} />
      {attendantId ? (
        <AttendantInformation attendantId={attendantId} />
      ) : (
        <div>No attendant assigned</div>
      )}
    </Flex>
  );
}
