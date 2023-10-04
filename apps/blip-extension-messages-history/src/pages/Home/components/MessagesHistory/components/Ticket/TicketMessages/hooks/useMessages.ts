import { useQuery } from '@tanstack/react-query';
import type { GetTicketsResponseItem } from 'blip-iframe';
import { getMessages } from '../utils/getMessages';

export default function useMessages({
  ticket,
}: {
  ticket: GetTicketsResponseItem;
}) {
  return useQuery({
    queryKey: ['getMessages', ticket.customerIdentity],
    queryFn: () => getMessages(ticket) ?? null,
  });
}
