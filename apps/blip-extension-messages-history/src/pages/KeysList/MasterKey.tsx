import { Code } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import type { GetApplicationResponse } from 'blip-iframe';
import { encrypt } from './lib/encrypt';

interface Props {
  application: GetApplicationResponse;
}

export default function MasterKey({ application }: Props) {
  const { shortName, accessKey } = application;

  const masterKeyQuery = useQuery({
    queryKey: ['masterKey'],
    queryFn: () =>
      encrypt({ shortName, accessKey }, 'QU1ZckFqUHBvMEc3NUdKNUxQE8'),
  });

  return (
    <div>
      Encrypted Bot Key:
      <Code block>{masterKeyQuery.data}</Code>
    </div>
  );
}
