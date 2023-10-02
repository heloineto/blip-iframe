import { useQuery } from '@tanstack/react-query';
import ReactJson from 'react-json-view';
import type { BlipFnName, Category } from '../lib/blipFns';
import blipFns from '../lib/blipFns';
import { SchemaInformation } from './SchemaInformation';

interface Props<TCategory extends Category> {
  blipFn: {
    category: TCategory;
    name: BlipFnName<TCategory>;
  };
}

export default function BlipFnView<TCategory extends Category>({
  blipFn,
}: Props<TCategory>) {
  const queryFn = blipFns[blipFn.category][
    blipFn.name
  ] as () => Promise<unknown>;

  const query = useQuery({
    queryKey: [blipFn.category, blipFn.name],
    queryFn: () => queryFn(),
    // retry: false,
    refetchOnWindowFocus: false,
  });

  if (query.isFetching) {
    return <span>loading...</span>;
  }

  if (query.isError || !query.data) {
    return <span>error: {JSON.stringify(query.error)}</span>;
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
      <div className="max-w-lg">
        {query.data ? (
          <SchemaInformation data={query.data} blipFn={blipFn} />
        ) : null}
      </div>
    </div>
  );
}
