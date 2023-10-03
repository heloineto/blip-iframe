import getTicketsHistory from './getTicketsHistory';
import type { DefaultUseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

// TODO: Figure out what to do when the params is optional
// export default function useTickets() {
//   return useQuery({
//     queryKey: ['getTickets'],
//     queryFn: () => blipQueryFn(getTicketsHistory()),
//   });
// }
// ""

export default function useTickets({
  ...rest
}: DefaultUseBlipQueryOptions<typeof getTicketsHistory>) {
  return useBlipQuery({
    blipFn: getTicketsHistory,
    ...rest,
  });
}
