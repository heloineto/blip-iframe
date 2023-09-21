import { useQuery } from '@tanstack/react-query';
import { blip } from 'blip-iframe';
import blipQueryFn from '../utils/queryFn';

export default function useAttendant(
  ...params: Parameters<typeof blip.getAttendant>
) {
  return useQuery({
    queryKey: ['getContact', ...params],
    queryFn: () => blipQueryFn(blip.getAttendant(...params)),
  });
}
