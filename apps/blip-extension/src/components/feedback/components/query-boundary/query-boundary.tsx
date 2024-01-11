import type { UseQueryResult } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import type { ErrorStateProps, LoadingStateProps } from '..';
import { ErrorState, LoadingState } from '..';

interface Props<TData = unknown, TError = unknown> {
  query: UseQueryResult<TData, TError> | UseQueryResult<TData>;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  loadingProps?: LoadingStateProps;
  errorProps?: ErrorStateProps;
  children: (
    data: TData,
    query: UseQueryResult<TData, TError> | UseQueryResult<TData>
  ) => JSX.Element;
}

export function QueryBoundary<TData = unknown, TError = unknown>({
  query,
  children,
  loadingComponent,
  errorComponent,
  loadingProps,
  errorProps,
}: Props<TData, TError>) {
  if (query.isLoading) {
    return loadingComponent ?? <LoadingState {...loadingProps} />;
  }

  if (query.isError) {
    return errorComponent ?? <ErrorState error={query.error} {...errorProps} />;
  }

  return children(query.data, query);
}
