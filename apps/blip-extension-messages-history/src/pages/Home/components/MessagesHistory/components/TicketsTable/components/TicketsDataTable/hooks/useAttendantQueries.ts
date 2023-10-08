import { useQueries } from '@tanstack/react-query';
import type { GetTicketsItem } from 'blip-iframe';
import { blip } from 'blip-iframe';
import blipQueryFn from 'pages/Home/utils/queryFn';

export function useAttendantQueries(tickets: GetTicketsItem[]) {
  return useQueries({
    queries: tickets.map((ticket) => {
      const identity = ticket.agentIdentity;

      return {
        queryKey: ['getAttendant', { identity }],
        queryFn: () =>
          identity ? blipQueryFn(blip.getAttendant({ identity })) : null,
        staleTime: Infinity,
      };
    }),
  });
}
