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
      <Command
        label="getContact()"
        command={() =>
          blip.getContact({
            identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
          })
        }
      />
      <Command label="getContacts()" command={() => blip.getContacts()} />
    </div>
  );
};

export default Home;
