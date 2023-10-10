import { Stack, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import type { GetAttendantsItem } from 'blip-iframe';
import type { GetApplicationResponse } from 'blip-iframe';
import { encrypt } from './lib/encrypt';
import { AttendantsTable } from './components/AttendantsTable';
import { useState } from 'react';
import { BotKeyDisplay } from './BotKeyDisplay';

interface Props {
  application: GetApplicationResponse;
}

export default function MasterKey({ application }: Props) {
  const { shortName, accessKey } = application;

  const [selectedAttendant, setSelectedAttendant] =
    useState<GetAttendantsItem | null>(null);

  const keyData = {
    shortName,
    accessKey,
    metadata: {
      attendant: selectedAttendant?.identity ?? null,
    },
  };

  const masterKeyQuery = useQuery({
    queryKey: ['masterKey', keyData],
    queryFn: () => {
      return encrypt(keyData, 'QU1ZckFqUHBvMEc3NUdKNUxQE8');
    },
  });

  const masterKey = masterKeyQuery.data;

  return (
    <Stack pt="md">
      <Title ta="center">Histórico de mensagens</Title>
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '40px',
        }}
      >
        <AttendantsTable
          selectedAttendant={selectedAttendant}
          setSelectedAttendant={setSelectedAttendant}
        />
        <BotKeyDisplay masterKey={masterKey} />
      </div>
    </Stack>
  );
}
