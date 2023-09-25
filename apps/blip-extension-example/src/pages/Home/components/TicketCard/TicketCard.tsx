import { Avatar } from '@mantine/core';
import type { GetTicketsResponse } from 'blip-iframe';
import useAttendant from '../../queries/useAttendant';
import useContact from '../../queries/useContact';

export default function TicketCard({
  ticket,
}: {
  ticket: GetTicketsResponse['items'][number];
}) {
  const contactId = ticket.customerIdentity;
  const attendantId = ticket.agentIdentity;

  const contactQuery = useContact({ params: { identity: contactId } });
  const attendantQuery = useAttendant({ params: { identity: attendantId } });

  if (contactQuery.isLoading || attendantQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (contactQuery.isError || attendantQuery.isError) {
    return <div>Error</div>;
  }

  const contact = contactQuery.data;
  const attendant = attendantQuery.data;

  return (
    <div className="flex h-20 grow gap-10">
      <div className="flex flex-col">
        <h2>Attendant</h2>
        <div className="flex grow items-center justify-center gap-5">
          <Avatar
            src={attendant.photoUri}
            radius={999}
            alt={attendant.fullName ?? attendant.identity}
          />
          <div>{attendant.fullName ?? attendant.identity}</div>
        </div>
      </div>
      <div className="flex grow flex-col">
        <h2>Contact</h2>
        <div className="flex grow items-center justify-center">
          {contact.name ?? contact.identity}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2>Ticket</h2>
        <div className="flex grow items-center justify-center">{`#${ticket.sequentialId}`}</div>
      </div>
    </div>
  );
}
