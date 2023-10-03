import { blip } from 'blip-iframe';
import type { DefaultUseBlipQueryOptions } from './useBlipQuery';
import useBlipQuery from './useBlipQuery';

export default function useContact({
  ...rest
}: DefaultUseBlipQueryOptions<typeof blip.getContact>) {
  return useBlipQuery({
    blipFn: blip.getContact,
    ...rest,
  });
}
