/* eslint-disable @typescript-eslint/no-explicit-any ---
 * any is a completely valid type to use in generics
 */
import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { default as blipQueryFn } from '../utils/queryFn';

export type BlipIframeFunction = (
  params: any
) => Promise<{ response: any; error: null } | { response: null; error: any }>;

export type DefaultUseBlipQueryOptions<TBlipFn extends BlipIframeFunction> =
  Omit<
    UseBlipQueryOptions<TBlipFn, unknown, (string | Parameters<TBlipFn>[0])[]>,
    'blipFn'
  >;

export interface UseBlipQueryOptions<
  TBlipFn extends BlipIframeFunction,
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
> extends Omit<
    UseQueryOptions<
      NonNullable<Awaited<ReturnType<TBlipFn>>['response']>,
      TError,
      NonNullable<Awaited<ReturnType<TBlipFn>>['response']>,
      TQueryKey
    >,
    'queryKey' | 'queryFn'
  > {
  blipFn: TBlipFn;
  params: Parameters<TBlipFn>[0];
}

export default function useBlipQuery<TBlipFn extends BlipIframeFunction>({
  blipFn,
  params,
  ...rest
}: UseBlipQueryOptions<TBlipFn, unknown, (string | Parameters<TBlipFn>[0])[]>) {
  return useQuery({
    queryKey: [blipFn.name, params],
    queryFn: () => blipQueryFn(blipFn(params)),
    ...rest,
  });
}
