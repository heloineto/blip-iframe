import { useState } from 'react';
import TicketTabs from './TicketTabs';
import TicketList from './components/TicketList';

export default function MessagesHistory() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  return (
    <div>
      {!selectedTicketId ? (
        <TicketList
          setSelectedTicketId={setSelectedTicketId}
          selectedTicketId={selectedTicketId}
        />
      ) : (
        <TicketTabs selectedTicketId={selectedTicketId} />
      )}
    </div>
  );
}
