import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routes from './Routes';

const queryClient = new QueryClient();

// TODO: Mapear todos os actions com zod schemas e garantir igualdade dos tipos

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
