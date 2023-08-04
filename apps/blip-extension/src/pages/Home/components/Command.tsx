import { useQuery } from '@tanstack/react-query';
import ReactJson from 'react-json-view';

interface Props {
  label: string;
  command: () => Promise<{ response: unknown; error: unknown }>;
}

export default function Command({ label, command }: Props) {
  const commandQuery = useQuery({
    queryKey: [label],
    queryFn: command,
  });

  if (commandQuery.isLoading) {
    return <span>loading...</span>;
  }

  const response = commandQuery.data?.response;

  return (
    <div>
      <div>{label}</div>
      {typeof response === 'object' ? (
        <ReactJson
          src={commandQuery.data?.response ?? {}}
          name="response"
          shouldCollapse={(field) => field.name !== 'response'}
        />
      ) : (
        <div>{JSON.stringify(response)}</div>
      )}
    </div>
  );
}
