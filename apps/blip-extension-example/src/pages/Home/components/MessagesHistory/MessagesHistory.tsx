import { useState } from 'react';
import Ticket from './components/Ticket';
import TicketsTable from './components/TicketsTable';
import MessagesHistoryProvider from './context/MessagesHistoryContext/MessagesHistoryProvider';

export default function MessagesHistory() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  return (
    <MessagesHistoryProvider
      value={{
        selectedTicketId,
        setSelectedTicketId,
      }}
    >
      <div>{!selectedTicketId ? <TicketsTable /> : <Ticket />}</div>
    </MessagesHistoryProvider>
  );
}
