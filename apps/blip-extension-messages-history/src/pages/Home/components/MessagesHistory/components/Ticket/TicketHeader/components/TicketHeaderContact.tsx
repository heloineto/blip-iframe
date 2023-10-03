import { Loader } from '@mantine/core';
import useContact from '../../../../../../queries/useContact';
import TicketHeaderContactInner from './TicketHeaderContactInner';

interface Props {
  contactId: string;
}

export default function TicketHeaderContact({ contactId }: Props) {
  const contactQuery = useContact({ params: { identity: contactId } });

  if (contactQuery.isLoading) {
    return <Loader />;
  }

  if (contactQuery.isError || !contactQuery.data) {
    return <div>Error fetching contact</div>;
  }

  const contact = contactQuery.data;

  return (
    <TicketHeaderContactInner
      name={contact.name ?? contact.identity ?? 'N/A'}
    />
  );
}
