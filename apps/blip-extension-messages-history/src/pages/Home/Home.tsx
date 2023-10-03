import { RestoreOutline } from '@blip-ds/react-icons';
import {
  ActionIcon,
  Drawer,
  MantineProvider,
  ScrollArea,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MessagesHistory from './components/MessagesHistory';
import configureFetcher from './utils/configureFetcher';

configureFetcher();

const queryClient = new QueryClient();

export default function Extension() {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
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
              <ActionIcon variant="light" color="blue" onClick={open} size="lg">
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
    </QueryClientProvider>
  );
}
