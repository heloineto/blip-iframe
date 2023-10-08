import { useLocalStorage } from '@mantine/hooks';
import configureFetcher from 'pages/Home/utils/configureFetcher';
import { useState } from 'react';
import { AuthForm } from './components/AuthForm';
import Ticket from './components/Ticket';
import TicketsTable from './components/TicketsTable';
import MessagesHistoryProvider from './context/MessagesHistoryContext/MessagesHistoryProvider';
import { buildAuthorizationKey, type GetTicketsHistoryItem } from 'blip-iframe';
import { useQuery } from '@tanstack/react-query';
import { getBotData } from './components/AuthForm/lib/getBotData';

interface Props {
  onCloseDrawer: () => void;
}

export default function MessagesHistory({ onCloseDrawer }: Props) {
  const [botKey, setBotKey] = useLocalStorage({
    key: 'BvMEc3N',
    defaultValue: '',
    getInitialValueInEffect: true,
  });

  const botDataQuery = useQuery({
    queryKey: ['getBotData', botKey],
    queryFn: () => getBotData(botKey),
    onSuccess: (botData) => {
      const authorizationKey = buildAuthorizationKey({
        botAccessKey: botData.accessKey,
        botShortName: botData.shortName,
      });

      configureFetcher(authorizationKey);
    },
  });

  const [selectedTicket, setSelectedTicket] =
    useState<GetTicketsHistoryItem | null>(null);

  return (
    <MessagesHistoryProvider
      value={{
        selectedTicket,
        setSelectedTicket,
        onCloseDrawer,
        botKey,
        setBotKey,
      }}
    >
      {!botKey ? (
        <AuthForm
          onSubmit={(values) => {
            setBotKey(values.botKey);
          }}
        />
      ) : (
        <>
          {!selectedTicket ? (
            <TicketsTable
              attendant={botDataQuery.data?.metadata.attendant ?? null}
            />
          ) : (
            <Ticket />
          )}
        </>
      )}
    </MessagesHistoryProvider>
  );
}
