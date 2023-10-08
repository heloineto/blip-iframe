import { useQuery } from '@tanstack/react-query';
import type { GetTicketsItem } from 'blip-iframe';
import { getMessages } from '../utils/getMessages';

export default function useMessages({ ticket }: { ticket: GetTicketsItem }) {
  return useQuery({
    queryKey: ['getMessages', ticket.customerIdentity],
    queryFn: () => getMessages(ticket) ?? null,
  });
}
