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
      <Command label="getAttendants()" command={() => blip.getAttendants()} />
      <Command
        label="getAttendant()"
        command={() =>
          blip.getAttendant({
            identity: 'heloi.neto%40blip.ai@blip.ai',
          })
        }
      />
      <Command
        label="getTunnelAccount()"
        command={() =>
          blip.getTunnelAccount({
            identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
          })
        }
      />

      <Command
        label="TEST"
        command={async () => {
          // getFromOriginator
          // :
          // false
          // identity
          // :
          // "73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter@0mn.io"
          // messageId
          // :
          // undefined
          // ownerIdentity
          // :
          // "solutionslabrouter@msging.net"
          // skipDate
          // :
          // undefined
          // take
          // :
          // 20

          return await blip.getThreads({
            // getFromOriginator: false,
            identity:
              '73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter@0mn.io',
            ownerIdentity: 'solutionslabrouter@msging.net',
            // take: 20,
            // merged: true,
          });
        }}
      />
    </div>
  );
};

export default Home;
