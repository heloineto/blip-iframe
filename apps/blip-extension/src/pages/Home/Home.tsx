import { blip } from 'blip-iframe';
import Command from './components/Command';

const Home = () => {
  return (
    <div>
      <Command label="getApplication()" command={() => blip.getApplication()} />
      <Command label="getAccount()" command={() => blip.getAccount()} />
      <Command label="getTickets()" command={() => blip.getTickets()} />
      <Command
        label="getTicketsHistory()"
        command={() => blip.getTicketsHistory()}
      />
      <Command
        label="getThreads()"
        command={() =>
          blip.getThreads({
            ownerIdentity: 'solutionslabrouter@msging.net',
          })
        }
      />
    </div>
  );
};

export default Home;
