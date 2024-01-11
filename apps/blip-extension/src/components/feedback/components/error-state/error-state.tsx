import type { AlertProps } from '@mantine/core';
import { Alert, Button, Group } from '@mantine/core';
import type { UseQueryResult } from '@tanstack/react-query';
import { Warning } from '@phosphor-icons/react/dist/ssr';
import { ReportErrorButton } from './components/report-error-button';

export interface ErrorStateProps extends AlertProps {
  error?: unknown;
  title?: string;
  query?: UseQueryResult;
}

// FUTURE: Create a better component for larger components
export function ErrorState({
  query,
  title = 'Algo deu errado',
  error,
  ...rest
}: ErrorStateProps) {
  return (
    <Alert
      color="red"
      icon={<Warning size={44} weight="bold" />}
      title={title}
      variant="light"
      {...rest}
    >
      <Group gap="xs">
        <ReportErrorButton color="gray" error={error} size="xs" />
        {query ? (
          <Button
            color="gray"
            loading={query.isFetching}
            onClick={() => {
              query.refetch();
            }}
            size="xs"
            variant="light"
          >
            Tentar de novo
          </Button>
        ) : null}
      </Group>
    </Alert>
  );
}
