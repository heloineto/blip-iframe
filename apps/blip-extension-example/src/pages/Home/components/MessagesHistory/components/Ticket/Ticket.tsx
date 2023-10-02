import { InfoOutline, MessageBallonOutline } from '@blip-ds/react-icons';
import { Stack, Tabs, useMantineTheme } from '@mantine/core';
import TicketHeader from './TicketHeader';
import TicketInformation from './TicketInformation';
import TicketMessages from './TicketMessages';

export default function Ticket() {
  const theme = useMantineTheme();

  return (
    <Stack>
      <TicketHeader />
      <Tabs defaultValue="messages">
        <Tabs.List
          style={{
            marginLeft: `-${theme.spacing.md}`,
            marginRight: `-${theme.spacing.md}`,
          }}
        >
          <Tabs.Tab
            value="messages"
            icon={<MessageBallonOutline size="1rem" />}
          >
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="information" icon={<InfoOutline size="1rem" />}>
            Information
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="messages" pt="xs">
          <TicketMessages />
        </Tabs.Panel>

        <Tabs.Panel value="information" pt="xs">
          <TicketInformation />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}