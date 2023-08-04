import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import Routes from './Routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<bds-loading-page />}>
        <Routes />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
