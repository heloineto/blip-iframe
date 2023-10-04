import {
  LogoutOutline,
  MoreOptionsVerticalOutline,
} from '@blip-ds/react-icons';
import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useMessagesHistory } from 'pages/Home/components/MessagesHistory/context/MessagesHistoryContext';

interface Props {}

export function MoreOptions(props: Props) {
  const { setBotKey } = useMessagesHistory();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <MoreOptionsVerticalOutline size="1.125rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          icon={
            colorScheme === 'dark' ? (
              <IconSun size={14} />
            ) : (
              <IconMoonStars size={14} />
            )
          }
          onClick={() => toggleColorScheme()}
        >
          {colorScheme === 'dark' ? 'Modo claro' : 'Modo escuro'}
        </Menu.Item>
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
