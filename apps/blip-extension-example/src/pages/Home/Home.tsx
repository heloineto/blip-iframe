import { useState } from 'react';
import Ticket from './components/Ticket';
import TicketList from './components/TicketList';

export default function Home() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  return (
    <div className="grid grow grid-cols-3 gap-10 py-10">
      <TicketList
        setSelectedTicketId={setSelectedTicketId}
        selectedTicketId={selectedTicketId}
      />
      <Ticket selectedTicketId={selectedTicketId} />
    </div>
  );
}
