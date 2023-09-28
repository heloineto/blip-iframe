import { Flex, Loader, Text } from '@mantine/core';
import useContact from '../../../../../../queries/useContact';

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
    <Flex direction="column" align="center">
      <Text size="10px" fw={700} tt="uppercase" c="dimmed">
        Contact
      </Text>
      <Text size="sm" fw={500} mt={-5}>
        {contact.name ?? contact.identity ?? 'N/A'}
      </Text>
    </Flex>
  );
}
