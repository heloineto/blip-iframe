import { useState } from 'react';
import Ticket from './components/Ticket';
import TicketsTable from './components/TicketsTable';
import MessagesHistoryProvider from './context/MessagesHistoryContext/MessagesHistoryProvider';

interface Props {
  onCloseDrawer: () => void;
}

export default function MessagesHistory({ onCloseDrawer }: Props) {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  return (
    <MessagesHistoryProvider
      value={{
        selectedTicketId,
        setSelectedTicketId,
        onCloseDrawer,
      }}
    >
      <div>{!selectedTicketId ? <TicketsTable /> : <Ticket />}</div>
    </MessagesHistoryProvider>
  );
}
