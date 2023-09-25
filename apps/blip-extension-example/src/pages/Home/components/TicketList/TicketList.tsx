import clsx from 'clsx';
import type { Dispatch, SetStateAction } from 'react';
import useTickets from '../../queries/useTickets';
import TicketCard from '../TicketCard';

interface Props {
  selectedTicketId: string | null;
  setSelectedTicketId: Dispatch<SetStateAction<string | null>>;
}

export default function TicketList({
  selectedTicketId,
  setSelectedTicketId,
}: Props) {
  const ticketsQuery = useTickets();

  if (ticketsQuery.isLoading) return <div>Loading...</div>;
  if (ticketsQuery.isError || !ticketsQuery.data) return <div>Error</div>;

  return (
    <div className="rounded bg-slate-800 p-5">
      <ul className="flex flex-col divide-y divide-slate-500">
        {ticketsQuery.data?.items.map((ticket) => (
          <li
            key={ticket.id}
            className={clsx(
              'flex transition-colors first:rounded-t last:rounded-b',
              ticket.id === selectedTicketId ? 'bg-blue-900' : ''
            )}
          >
            <button
              type="button"
              className="flex grow px-4 py-2 text-left"
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
