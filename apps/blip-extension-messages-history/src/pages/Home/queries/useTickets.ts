import getTicketsHistory from './getTicketsHistory';
import type { DefaultUseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

export default function useTickets({
  ...rest
}: DefaultUseBlipQueryOptions<typeof getTicketsHistory>) {
  return useBlipQuery({
    blipFn: getTicketsHistory,
    ...rest,
  });
}
