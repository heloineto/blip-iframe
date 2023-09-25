import { blip, buildAuthorizationKey } from 'blip-iframe';
import Command from './components/Command';

const actions = [
  'sendCommand',
  'startLoading',
  'stopLoading',
  'heightChange',
  'uploadFile',
  'stateChangeSuccess',
  'state',
  'showModal',
  'showStepperModal',
  'showChecklistModal',
  'showOverlayAndBlockScroll',
  'removeOverlayAndReleaseScroll',
  'hideNavbar',
  'showNavbar',
  'changeSubheaderTitle',
  'getCurrentLanguage',
  'toast',
  'getApplication',
  'hasPermissions',
  'getPermissionsObject',
  'segment',
  'getUserContext',
  'getToken',
  'getAccount',
  'sendApplicationRequest',
  'unauthorizedAccess',
  'addTenantPrefixToUrl',
  'getTenantUrl',
  'getTenantPlan',
  'inviteUser',
  'changeLocation',
  'changePath',
  'showUploadErrorToast',
  'showAlert',
  'redirectProcessor',
  'redirectToApplicationList',
  'redirectToSubscriptionNotificationPayment',
  'closeSidebar',
] as const;

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2>Actions</h2>
        <div className="flex gap-10">
          {actions.map((action) => (
            <Command
              key={action}
              label={`${action}()`}
              command={() => {
                if (action in blip) {
                  // @ts-expect-error -- ignore
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                  return blip[action as keyof typeof blip]();
                }
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Commands</h2>
        <div className="flex gap-10 overflow-auto">
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
                identity:
                  '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
              })
            }
          />
          <Command label="getContacts()" command={() => blip.getContacts()} />
          <Command
            label="getAttendants()"
            command={() => blip.getAttendants()}
          />
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
                identity:
                  '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
              })
            }
          />

          <Command
            label="TEST"
            command={async () => {
              return await blip.getThreads({
                identity:
                  'eb47bbdc-5dcf-48da-aa6c-7d6f7d2b77c4.testeheloi@0mn.io',
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
      </div>
    </div>
  );
};

export default Home;
