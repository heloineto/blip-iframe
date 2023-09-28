import { InfoOutline, MessageBallonOutline } from '@blip-ds/react-icons';
import {
  ActionIcon,
  Avatar,
  ChevronIcon,
  Group,
  Tabs,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';

interface Props {
  selectedTicketId: string;
}

export default function TicketTabs({ selectedTicketId }: Props) {
  const theme = useMantineTheme();

  return (
    <UnstyledButton
      style={{
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      }}
    >
      <Group>
        <ActionIcon>
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
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab
              value="gallery"
              icon={<MessageBallonOutline size="0.8rem" />}
            >
              Messages
            </Tabs.Tab>
            <Tabs.Tab value="messages" icon={<InfoOutline size="0.8rem" />}>
              Information
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Group>
    </UnstyledButton>
  );
}
