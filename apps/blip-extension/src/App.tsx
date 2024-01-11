import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';

const queryClient = new QueryClient();

// TODO: Mapear todos os actions com zod schemas e garantir igualdade dos tipos

const App = () => {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
