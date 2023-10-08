import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import type {
  GetTicketsHistoryItem,
  GetTicketsHistoryResponse,
} from 'blip-iframe';
import { blip } from 'blip-iframe';
import blipQueryFn from 'pages/Home/utils/queryFn';
import { PAGE_SIZE } from '../components/TicketsDataTable/utils/components';

export function useTicketsQuery(attendant: string | null) {
  return useInfiniteQuery({
    queryKey: ['getTicketsHistory', attendant, PAGE_SIZE],
    queryFn: async ({ pageParam = 0 }) => {
      const response = (await blipQueryFn(
        blip.getTicketsHistory({
          filter: `status ne 'Open' and status ne 'Waiting' ${
            attendant ? `and (AgentIdentity eq '${attendant}')` : ''
          }`,
          take: PAGE_SIZE,
          skip: PAGE_SIZE * pageParam,
        })
      )) as GetTicketsHistoryResponse;

      return response.items;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
  });
}

export type TicketsQuery = UseInfiniteQueryResult<GetTicketsHistoryItem[]>;
