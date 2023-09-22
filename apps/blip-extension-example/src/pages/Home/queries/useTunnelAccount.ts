import { blip } from 'blip-iframe';
import type { DefaultUseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

export default function useTunnelAccount({
  ...rest
}: DefaultUseBlipQueryOptions<typeof blip.getTunnelAccount>) {
  return useBlipQuery({
    blipFn: blip.getTunnelAccount,
    ...rest,
  });
}
