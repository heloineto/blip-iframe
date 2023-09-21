import type { Dispatch, SetStateAction } from 'react';
import useTickets from '../queries/useTickets';
import TicketCard from './TicketCard';

interface Props {
  setSelectedTicketId: Dispatch<SetStateAction<string | null>>;
}

export default function TicketList({ setSelectedTicketId }: Props) {
  const ticketsQuery = useTickets();

  if (ticketsQuery.isLoading) return <div>Loading...</div>;
  if (ticketsQuery.isError) return <div>Error</div>;

  return (
    <div className="rounded bg-slate-800 p-5">
      <ul className="flex flex-col divide-y">
        {ticketsQuery.data?.items.map((ticket) => (
          <li key={ticket.id} className="flex">
            <button
              type="button"
              className="grow text-left"
              onClick={() => {
                setSelectedTicketId(ticket.id);
              }}
            >
              <TicketCard ticket={ticket} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
