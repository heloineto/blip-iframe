import { useQuery } from '@tanstack/react-query';
import type { GetTicketsHistoryItem } from 'blip-iframe';
import { getMessages } from '../utils/getMessages';

export default function useMessages({
  ticket,
}: {
  ticket: GetTicketsHistoryItem;
}) {
  return useQuery({
    queryKey: ['getMessages', ticket.customerIdentity],
    queryFn: () => getMessages(ticket) ?? null,
  });
}
