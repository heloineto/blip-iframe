import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Routes from './Routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV !== 'production' ? false : undefined,
      refetchOnWindowFocus:
        process.env.NODE_ENV !== 'production' ? false : undefined,
    },
  },
});

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Nunito Sans',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
