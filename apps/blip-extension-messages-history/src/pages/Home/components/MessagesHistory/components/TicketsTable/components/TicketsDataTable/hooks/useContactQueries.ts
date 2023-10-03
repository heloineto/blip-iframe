import { useQueries } from '@tanstack/react-query';
import type { GetTicketsResponseItem } from 'blip-iframe';
import { blip } from 'blip-iframe';
import blipQueryFn from 'pages/Home/utils/queryFn';

export function useContactQueries(tickets: GetTicketsResponseItem[]) {
  return useQueries({
    queries: tickets.map((ticket) => {
      const identity = ticket.customerIdentity;

      return {
        queryKey: ['getContact', { identity }],
        queryFn: () =>
          identity ? blipQueryFn(blip.getContact({ identity })) : null,
        staleTime: Infinity,
      };
    }),
  });
}
