import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ReactJson from 'react-json-view';

interface Props {
  label: string;
  command: () => Promise<{ response: unknown; error: unknown }>;
}

export default function Command({ label, command }: Props) {
  const [enabled, setEnabled] = useState(false);
  const commandQuery = useQuery({
    queryKey: [label],
    queryFn: command,
    enabled,
  });

  const response = commandQuery.data?.response;

  return (
    <div className="flex shrink-0 flex-col items-center gap-3 rounded-lg bg-slate-600 px-5 pb-5 pt-4">
      <button
        type="button"
        className="w-full rounded-lg bg-slate-500 px-3 py-2 text-white"
        onClick={() => {
          if (enabled) {
            setEnabled(true);
          } else {
            void commandQuery.refetch();
          }
        }}
      >
        {label}
      </button>
      <div style={{ width: 480 }}>
        {commandQuery.isFetching ? (
          <span>loading...</span>
        ) : (
          <div className="max-h-96 w-fit overflow-auto bg-slate-100">
            {typeof response === 'object' ? (
              <ReactJson
                src={commandQuery.data ?? {}}
                name="response"
                shouldCollapse={(field) => field.name !== 'response'}
                theme="ocean"
                style={{ width: 480 }}
              />
            ) : (
              <div>{JSON.stringify(response)}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
