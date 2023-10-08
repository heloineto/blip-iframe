import type { UseQueryResult } from '@tanstack/react-query';
import type {
  BlipContact,
  GetAttendantResponse,
  GetTicketsItem,
} from 'blip-iframe';

export default function getTicketRecords(
  tickets: GetTicketsItem[],
  attendantQueries: UseQueryResult<GetAttendantResponse | null>[],
  contactQueries: UseQueryResult<BlipContact | null>[]
) {
  return tickets.map((ticket, index) => {
    const attendant = attendantQueries[index].data;
    const contact = contactQueries[index].data;

    return {
      id: ticket.id,
      sequentialId: ticket.sequentialId ? `#${ticket.sequentialId}` : 'N/A',
      attendant: attendant?.fullName ?? attendant?.identity ?? 'N/A',
      attendantPhoto: attendant?.photoUri,
      contact: contact?.name ?? contact?.identity ?? 'N/A',
    };
  });
}
