import { useQuery } from '@tanstack/react-query';
import ReactJson from 'react-json-view';
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from '../../../../components/feedback';
import type { functions } from '../../utils/functions';
import { SchemaTester } from '../SchemaTester';

interface Props {
  section: 'actions' | 'commands';
  blipFunction: (typeof functions)['actions'][number];
}

export function ResponseViewer({ section, blipFunction }: Props) {
  const query = useQuery({
    queryKey: [section, blipFunction.value],
    queryFn: () => blipFunction.fn(),
    // retry: false,
    refetchOnWindowFocus: false,
  });

  if (query.isFetching) {
    return <LoadingState />;
  }

  if (query.isError) {
    return <ErrorState query={query} error={query.error} />;
  }

  if (!query.data) {
    return <EmptyState />;
  }

  console.log(query.data);

  return (
    <div className="m-md flex grow">
      <div className="flex h-fit max-h-full w-2/3 shrink-0 grow-0 overflow-hidden rounded-sm">
        <div className="grow overflow-auto">
          <ReactJson
            src={query.data as object}
            name="response"
            shouldCollapse={(field) =>
              !!field.name && !['response', 'data'].includes(field.name)
            }
            theme="ocean"
            collapseStringsAfterLength={70}
            style={{
              maxWidth: 'calc(100vw - 348px)',
            }}
          />
        </div>
      </div>
      <div className="pl-md w-1/3 shrink-0">
        {blipFunction.schema ? (
          <SchemaTester response={query.data} schema={blipFunction.schema} />
        ) : null}
      </div>
    </div>
  );
}
