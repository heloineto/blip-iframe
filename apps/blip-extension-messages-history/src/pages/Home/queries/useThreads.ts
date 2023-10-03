import { blip } from 'blip-iframe';
import type { DefaultUseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

export default function useThreads({
  ...rest
}: DefaultUseBlipQueryOptions<typeof blip.getThreads>) {
  return useBlipQuery({
    blipFn: blip.getThreads,
    ...rest,
  });
}
