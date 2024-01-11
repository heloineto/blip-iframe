import { useQuery } from '@tanstack/react-query';
import ReactJson from 'react-json-view';
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from '../../../../components/feedback';

interface Props {
  section: 'actions' | 'commands';
  blipFunction: {
    value: string;
    fn: () => Promise<unknown>;
  };
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

  return (
    <div className="flex flex-col">
      <div className="max-h-96 w-fit overflow-auto bg-slate-100">
        <ReactJson
          src={query.data as object}
          name="response"
          shouldCollapse={(field) => field.name !== 'response'}
          theme="ocean"
          style={{ width: 480 }}
        />
      </div>
      {/* <div className="max-w-lg">
        {query.data ? (
          <SchemaInformation data={query.data} blipFn={blipFunction.fn} />
        ) : null}
      </div> */}
    </div>
  );
}
