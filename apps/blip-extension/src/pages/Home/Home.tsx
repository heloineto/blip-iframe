import { blip, buildAuthorizationKey } from 'blip-iframe';
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
      {/* <Command
        label="getTunnelAccount()"
        command={() =>
          blip.get({
            identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
          })
        }
      /> */}

      <Command
        label="TEST"
        command={async () => {
          return await blip.getThreads({
            identity: 'eb47bbdc-5dcf-48da-aa6c-7d6f7d2b77c4.testeheloi@0mn.io',
          });
        }}
      />
      <Command
        label="buildAuthorizationKey()"
        command={async () => {
          const app = await blip.getApplication();

          return {
            response: buildAuthorizationKey({
              botAccessKey: app.response?.accessKey ?? '',
              botShortName: app.response?.shortName ?? '',
            }),
            error: null,
          };
        }}
      />
    </div>
  );
};

export default Home;
