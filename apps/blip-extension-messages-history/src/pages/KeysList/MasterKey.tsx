import { Button, Group, Stack, Textarea, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import type { GetAttendantsItem } from 'blip-iframe';
import { blip, type GetApplicationResponse } from 'blip-iframe';
import { encrypt } from './lib/encrypt';
import copyToClipboard from 'copy-to-clipboard';
import { AttendantsList } from './components/AttendantsList';
import { useState } from 'react';

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
    <Stack align="center" style={{ flex: 1 }}>
      <Title>Messages History</Title>
      <div>Encrypted Bot Key</div>
      <Stack w="100%">
        <Textarea readOnly value={masterKey} w="100%" />
        <Group position="right">
          <Button
            onClick={() => {
              if (!masterKey) return;

              copyToClipboard(masterKey);

              void blip.toast({
                title: 'Code copied!',
                message: 'The code was copied to your clipboard',
                type: 'success',
              });
            }}
          >
            Copy key
          </Button>
        </Group>
      </Stack>
      <AttendantsList
        selectedAttendant={selectedAttendant}
        setSelectedAttendant={setSelectedAttendant}
      />
    </Stack>
  );
}
