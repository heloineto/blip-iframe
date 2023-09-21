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
    <div>
      <button
        type="button"
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
      <div>
        {commandQuery.isFetching ? (
          <span>loading...</span>
        ) : (
          <div className="w-fit rounded-sm bg-slate-100">
            {typeof response === 'object' ? (
              <ReactJson
                src={commandQuery.data ?? {}}
                name="response"
                shouldCollapse={(field) => field.name !== 'response'}
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
