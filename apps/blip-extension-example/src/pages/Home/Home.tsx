import { useQuery } from '@tanstack/react-query';
import type { GetTicketsResponse } from 'blip-iframe';
import { blip } from 'blip-iframe';

export default function Home() {
  const ticketsQuery = useQuery({
    queryKey: ['getTickets'],
    queryFn: async () => {
      const { response, error } = await blip.getTickets();
      if (error) throw error;

      return response;
    },
  });

  if (ticketsQuery.isLoading) return <div>Loading...</div>;
  if (ticketsQuery.isError) return <div>Error</div>;

  // customerIdentity

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {ticketsQuery.data?.items.map((ticket) => (
          <li key={ticket.id} className="flex">
            <Ticket ticket={ticket} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Ticket({ ticket }: { ticket: GetTicketsResponse['items'][number] }) {
  const contactQuery = useQuery({
    queryKey: ['getContact', ticket.customerIdentity],
    queryFn: async () => {
      const { response, error } = await blip.getContact({
        identity: ticket.customerIdentity,
      });
      if (error) throw error;
      return response;
    },
  });

  if (contactQuery.isLoading) return <div>Loading...</div>;
  if (contactQuery.isError) return <div>Error</div>;

  console.log(contactQuery.data);

  return (
    <div className="flex flex-col items-center">
      <h2>Ticket</h2>
      <div>{`#${ticket.sequentialId}`}</div>
    </div>
  );
}
