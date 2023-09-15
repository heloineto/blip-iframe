import '@mantine/carousel/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/ds/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/spotlight/styles.css';

import { HotKeysHandler } from '@/components/HotKeysHandler';
import { MdxProvider } from '@/components/MdxProvider';
import { ModalsProviderDemo } from '@/components/ModalsProviderDemo';
import { Search } from '@/components/Search';
import { Shell } from '@/components/Shell';
import { FontsStyle } from '@/fonts';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import '../styles/variables.css';
import { theme } from '../theme';

const excludeShell = ['/', '/combobox', '/app-shell'];

export default function App({ Component, pageProps, router }: AppProps) {
  const shouldRenderShell = !excludeShell.includes(router.pathname);

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <FontsStyle />
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider theme={theme}>
          <Search />
          <Notifications />
          <ModalsProviderDemo>
            <MdxProvider>
              <HotKeysHandler />
              {shouldRenderShell ? (
                <Shell>
                  <Component {...pageProps} />
                </Shell>
              ) : (
                <Component {...pageProps} />
              )}
            </MdxProvider>
          </ModalsProviderDemo>
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}
