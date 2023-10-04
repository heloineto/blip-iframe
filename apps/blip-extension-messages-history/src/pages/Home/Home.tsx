import { RestoreOutline } from '@blip-ds/react-icons';
import type { ColorScheme } from '@mantine/core';
import {
  ActionIcon,
  ColorSchemeProvider,
  Drawer,
  MantineProvider,
  ScrollArea,
  Tooltip,
} from '@mantine/core';
import { useDisclosure, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { KeysList } from 'pages/KeysList/KeysList';
import MessagesHistory from './components/MessagesHistory';

const queryClient = new QueryClient();

export default function Extension() {
  const [opened, { open, close }] = useDisclosure(true);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <KeysList />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 10,
                pointerEvents: 'all',
              }}
            >
              <Tooltip label="Messages History" withArrow>
                <ActionIcon
                  variant="light"
                  color="blue"
                  onClick={open}
                  size="lg"
                >
                  <RestoreOutline size="1.625rem" />
                </ActionIcon>
              </Tooltip>
            </div>
            <Drawer
              opened={opened}
              onClose={close}
              withCloseButton={false}
              position="right"
              scrollAreaComponent={ScrollArea.Autosize}
              size={480}
              styles={{
                body: {
                  height: '100vh',
                  display: 'flex',
                },
              }}
            >
              <MessagesHistory onCloseDrawer={close} />
            </Drawer>
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}
