import type { Message, Sender } from 'blip-iframe';
import { blip } from 'blip-iframe';
import { v4 as uuidv4 } from 'uuid';
import type { BlipFunction } from './functions';
import { getAttendantsSchema } from './schemas/getAttendantsSchema';
import { getContactsSchema } from './schemas/getContactsSchema';
import { getTeamsAndAgentsOnlineSchema } from './schemas/getTeamsAndAgentsOnlineSchema';
import { getTeamsSchema } from './schemas/getTeamsSchema';
import { getTicketsSchema } from './schemas/getTickets';

export const commands: BlipFunction[] = [
  {
    value: 'test',
    fn: () => {
      return blip.sendCommand({
        command: {
          method: 'get',
          to: 'postmaster@analytics.msging.net',
          uri: `/metrics/active-messages/NI`,
        },
      });
    },
  },
  {
    value: 'getPlans',
    fn: () => blip.getPlans(),
  },
  {
    value: 'getEventTrackCount',
    fn: () =>
      blip.getEventTracks({
        startDate: '2024-01-25T00:00:00.000Z',
        endDate: '2024-04-26T00:00:00.000Z',
        category: 'Name Generated',
      }),
  },
  {
    value: 'getEventTracks',
    fn: () =>
      blip.getEventTracks({
        category: 'Name Generated',
      }),
  },
  {
    value: 'getEventTrackCategories',
    fn: () => blip.getEventTrackCategories(),
  },
  {
    value: 'getTenantPlan',
    fn: () => blip.getTenantPlan({ tenantId: 'csgrowth' }),
  },
  {
    value: 'getTeams',
    fn: () => blip.getTeams(),
    schema: getTeamsSchema,
  },
  {
    value: 'getTeamsAndAgentsOnline',
    fn: () => blip.getTeamsAndAgentsOnline(),
    schema: getTeamsAndAgentsOnlineSchema,
  },
  {
    value: 'getAttendants',
    fn: () => blip.getAttendants(),
    schema: getAttendantsSchema,
  },
  {
    value: 'getAttendant',
    fn: () =>
      blip.getAttendant({
        identity: 'heloi.neto%40blip.ai@blip.ai',
      }),
  },
  {
    value: 'getContacts',
    fn: () => blip.getContacts(),
    schema: getContactsSchema,
  },
  {
    value: 'getThreads',
    fn: () => {
      return blip.getThreads({
        ownerIdentity: 'solutionslabrouter@msging.net',
        getFromOriginator: false,
        identity:
          '73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter@0mn.io',
        merged: true,
        take: 20,
      });
    },
  },
  {
    value: 'getTickets',
    fn: () => blip.getTickets(),
    schema: getTicketsSchema,
  },
  {
    value: 'getBotAccount',
    fn: () => blip.getBotAccount(),
  },
  // TODO: Add setBotAccount
  {
    value: 'Usage With Fetch',
    fn: () => {
      const sender: Sender = async <TData = unknown>(message: Message) => {
        if (message.action !== 'sendCommand') {
          return {
            success: false,
            error: new Error(
              'The REST API does not supports actions, only commands'
            ),
          };
        }

        const response = await fetch('https://msging.net/commands', {
          method: 'POST',
          headers: {
            Authorization: 'Key dGVzdGVoZWxvaTp3NVhGSnlGS1lIZTA1QkxldnJ4SA==',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: uuidv4(),
            ...message.content.command,
          }),
        });

        if (!response.ok) {
          return {
            success: false,
            error: new Error(response.statusText),
          } as const;
        }

        const { resource } = (await response.json()) as {
          resource: TData;
        };

        return { success: true, data: resource } as const;
      };

      return blip.getTickets({ skip: 0, take: 20 }, sender);
    },
  },
  {
    value: 'getBots',
    fn: () =>
      blip.sendCommand({
        command: {
          to: 'postmaster@portal.blip.ai',
          method: 'get',
          uri: '/tenants/csgrowth/applications',
          id: '29582366-b6c8-4025-92d6-0fc60fc1a20f',
          metadata: {
            'blip_portal.email': 'heloi.neto@blip.ai',
          },
        },
      }),
  },
  // {
  //   value: 'With IframeMessageProxy',
  //   fn: () =>
  //     IframeMessageProxy.sendMessage({
  //       action: 'sendCommand',
  //       content: {
  //         command: {
  //           to: 'postmaster@portal.blip.ai',
  //           method: 'get',
  //           uri: '/tenants/csgrowth/applications',
  //         },
  //       },
  //     }),
  // },
  // {
  //   value: 'With Blip SDK',
  //   fn: () =>
  //     IframeMessageProxy.sendMessage({
  //       action: 'sendCommand',
  //       content: {
  //         destination: 'BlipService',
  //         command: {
  //           to: 'postmaster@portal.blip.ai',
  //           method: 'get',
  //           uri: '/tenants/csgrowth/applications',
  //         },
  //       },
  //     }),
  // },
  // getTicketsHistory: () =>
  //   blip.getTicketsHistory({
  //     // filter:
  //     //   "storageDate ge datetimeoffset'2023-09-02T03:00:00.000Z' and storageDate le datetimeoffset'2023-10-04T02:59:00.000Z' and status ne 'Open' and status ne 'Waiting'",
  //     // take: 20,
  //     // skip: 0,
  //   }),
  // getContacts: () => blip.getContacts(),
  // getTunnelAccount: () =>
  //   blip.getTunnelAccount({
  //     identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
  //   }),
  // getAttendants: () => blip.getAttendants(),
  // getAttendant: () =>
  //   blip.getAttendant({
  //     identity: 'heloi.neto%40blip.ai@blip.ai',
  //   }),
];
