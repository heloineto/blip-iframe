import { Flex } from '@mantine/core';
import type { GetTicketsItem } from 'blip-iframe';
import AttendantInformation from './AttendantInformation';
import ContactInformation from './ContactInformation';
import TicketInformation from './TicketInformation';

interface Props {
  ticket: GetTicketsItem;
}

export default function Information({ ticket }: Props) {
  const attendantId = ticket.agentIdentity;

  return (
    <Flex
      direction="column"
      gap="xl"
      style={{
        flex: 1,
        overflow: 'auto',
      }}
    >
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
