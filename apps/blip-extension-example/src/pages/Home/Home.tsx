import { useQuery } from '@tanstack/react-query';
import { blip } from 'blip-iframe';

const Home = () => {
  const query = useQuery({
    queryKey: ['getTickets'],
    queryFn: () => blip.getTickets(),
  });

  return <div />;
};

export default Home;
