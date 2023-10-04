import { useLocalStorage } from '@mantine/hooks';
import type { GetTicketsResponseItem } from 'blip-iframe';
import configureFetcher from 'pages/Home/utils/configureFetcher';
import { useEffect, useState } from 'react';
import { AuthForm } from './components/AuthForm';
import { getAuthorizationKey } from './components/AuthForm/lib/getAuthorizationKey';
import Ticket from './components/Ticket';
import TicketsTable from './components/TicketsTable';
import MessagesHistoryProvider from './context/MessagesHistoryContext/MessagesHistoryProvider';

interface Props {
  onCloseDrawer: () => void;
}

export default function MessagesHistory({ onCloseDrawer }: Props) {
  const [botKey, setBotKey] = useLocalStorage({
    key: 'BvMEc3N',
    defaultValue: '',
  });

  useEffect(() => {
    if (!botKey) return;

    void (async () => {
      const authorizationKey = await getAuthorizationKey(botKey);

      configureFetcher(authorizationKey);
    })();
  }, [botKey]);

  const [selectedTicket, setSelectedTicket] =
    useState<GetTicketsResponseItem | null>(null);

  return (
    <MessagesHistoryProvider
      value={{
        selectedTicket,
        setSelectedTicket,
        onCloseDrawer,
      }}
    >
      {!botKey ? (
        <AuthForm
          onSubmit={(values) => {
            setBotKey(values.botKey);
          }}
        />
      ) : (
        <>{!selectedTicket ? <TicketsTable /> : <Ticket />}</>
      )}
    </MessagesHistoryProvider>
  );
}
