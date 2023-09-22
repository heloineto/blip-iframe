import { blip } from 'blip-iframe';
import type { DefaultUseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

export default function useAttendant({
  ...rest
}: DefaultUseBlipQueryOptions<typeof blip.getAttendant>) {
  return useBlipQuery({
    blipFn: blip.getAttendant,
    ...rest,
  });
}
