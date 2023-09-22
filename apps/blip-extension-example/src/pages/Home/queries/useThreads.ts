import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { GetThreadsParams, GetThreadsResponse } from 'blip-iframe';
import { blip } from 'blip-iframe';
import blipQueryFn from '../utils/queryFn';

export interface UseThreadsOptions<
  TQueryFnData = GetThreadsResponse | null,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> extends Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  > {
  params: Parameters<typeof blip.getThreads>[0];
}

export default function useThreads({
  params,
  ...rest
}: UseThreadsOptions<
  GetThreadsResponse | null,
  unknown,
  GetThreadsResponse | null,
  (string | GetThreadsParams)[]
>) {
  return useQuery({
    queryKey: ['getThreads', params] as const,
    queryFn: () => blipQueryFn(blip.getThreads(params)),
    ...rest,
  });
}
