import { blip } from 'blip-iframe';
import type { UseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

export default function useTunnelAccount({
  ...rest
}: Omit<
  UseBlipQueryOptions<
    typeof blip.getTunnelAccount,
    unknown,
    (string | Parameters<typeof blip.getTunnelAccount>[0])[]
  >,
  'blipFn'
>) {
  return useBlipQuery({
    blipFn: blip.getTunnelAccount,
    ...rest,
  });
}
