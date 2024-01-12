import { blip } from 'blip-iframe';

export const commands = [
  {
    value: 'getThreads',
    fn: () => {
      return blip.getThreads({
        ownerIdentity: 'solutionslabrouter@msging.net',
        // getFromOriginator: false,
        identity:
          '73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter@0mn.io',
        merged: true,
        take: 20,
      });
    },
  },
  // getTickets: () => blip.getTickets(),
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
