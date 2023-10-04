import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ActionToggle() {
  // const { setColorScheme } = useMantineColorScheme();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group align="center">
      <ActionIcon
        onClick={() =>
          toggleColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun stroke={1.5} />
        <IconMoon stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}
