import { useQuery } from '@tanstack/react-query';
import { blip } from 'blip-iframe';
import blipQueryFn from '../utils/queryFn';

export default function useContact(
  ...params: Parameters<typeof blip.getContact>
) {
  return useQuery({
    queryKey: ['getContact', ...params],
    queryFn: () => blipQueryFn(blip.getContact(...params)),
  });
}
