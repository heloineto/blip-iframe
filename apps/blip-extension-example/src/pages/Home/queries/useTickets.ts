import { useQuery } from '@tanstack/react-query';
import { blip } from 'blip-iframe';
import blipQueryFn from '../utils/queryFn';

export default function useTickets() {
  return useQuery({
    queryKey: ['getTickets'],
    queryFn: () => blipQueryFn(blip.getTickets()),
  });
}
