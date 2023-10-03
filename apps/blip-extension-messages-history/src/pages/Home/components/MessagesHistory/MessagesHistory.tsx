import type { GetTicketsResponseItem } from 'blip-iframe';
import { useState } from 'react';
import Ticket from './components/Ticket';
import TicketsTable from './components/TicketsTable';
import MessagesHistoryProvider from './context/MessagesHistoryContext/MessagesHistoryProvider';

interface Props {
  onCloseDrawer: () => void;
}

export default function MessagesHistory({ onCloseDrawer }: Props) {
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
      {!selectedTicket ? <TicketsTable /> : <Ticket />}
    </MessagesHistoryProvider>
  );
}
