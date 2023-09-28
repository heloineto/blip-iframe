import { InfoOutline, MessageBallonOutline } from '@blip-ds/react-icons';
import {
  ActionIcon,
  Avatar,
  ChevronIcon,
  Group,
  Stack,
  Tabs,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import useMessagesHistory from '../../context/MessagesHistoryContext/useMessagesHistory';
import TicketInformation from './TicketInformation';
import TicketMessages from './TicketMessages';

export default function Ticket() {
  const theme = useMantineTheme();
  const { setSelectedTicketId } = useMessagesHistory();

  return (
    <Stack>
      <UnstyledButton
        style={{
          display: 'block',
          width: '100%',
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        }}
      >
        <Group>
          <ActionIcon
            onClick={() => {
              setSelectedTicketId(null);
            }}
          >
            <ChevronIcon style={{ transform: 'rotate(90deg)' }} />
          </ActionIcon>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              Harriette Spoonlicker
            </Text>
            <Text c="dimmed" size="xs">
              hspoonlicker@outlook.com
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      <Tabs defaultValue="messages">
        <Tabs.List>
          <Tabs.Tab
            value="messages"
            icon={<MessageBallonOutline size="0.8rem" />}
          >
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="information" icon={<InfoOutline size="0.8rem" />}>
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
