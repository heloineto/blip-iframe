import {
  LogoutOutline,
  MoreOptionsVerticalOutline,
} from '@blip-ds/react-icons';
import { ActionIcon, Menu } from '@mantine/core';
import { useMessagesHistory } from 'pages/Home/components/MessagesHistory/context/MessagesHistoryContext';

interface Props {}

export function MoreOptions(props: Props) {
  const { setBotKey } = useMessagesHistory();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <MoreOptionsVerticalOutline size="1.125rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          color="red"
          icon={<LogoutOutline size={14} />}
          onClick={() => setBotKey('')}
        >
          Sair desse bot
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
