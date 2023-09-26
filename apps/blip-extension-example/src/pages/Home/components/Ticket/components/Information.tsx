import { Flex } from '@mantine/core';
import useTickets from '../../../queries/useTickets';
import AttendantInformation from './AttendantInformation';
import ContactInformation from './ContactInformation';
import TicketInformation from './TicketInformation';

interface Props {
  ticketId: string;
}

export default function Information({ ticketId }: Props) {
  const ticketsQuery = useTickets();
  const ticket = ticketsQuery.data?.items.find((t) => t.id === ticketId);

  if (!ticket) {
    return <>Error: Ticket not found</>;
  }

  return (
    <Flex direction="column" gap="xl">
      <ContactInformation ticket={ticket} />
      <TicketInformation ticket={ticket} />
      <AttendantInformation ticket={ticket} />
    </Flex>
  );
}
