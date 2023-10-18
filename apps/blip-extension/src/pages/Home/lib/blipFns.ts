import { blip } from 'blip-iframe';

const blipFns = {
  actions: {
    // startLoading: () => {},
    // stopLoading: () => {},
    // heightChange: () => {},
    // uploadFile: () => {},
    // stateChangeSuccess: () => {},
    // state: () => {},
    // showModal: () => {},
    // showStepperModal: () => {},
    // showChecklistModal: () => {},
    // showOverlayAndBlockScroll: () => {},
    // removeOverlayAndReleaseScroll: () => {},
    getApplication: () => blip.getApplication(),
    getCurrentLanguage: () => blip.getCurrentLanguage(),
    hideNavbar: () => blip.hideNavbar(),
    sendCommand: () => {},
    showNavbar: () => blip.showNavbar(),
    // changeSubheaderTitle: () => {},
    toast: () =>
      blip.toast({
        title: 'Hello World',
        message: 'Hello World',
        type: 'success',
        duration: 1000,
        buttontext: "I'm a button",
      }),
    // hasPermissions: () => {},
    getPermissionsObject: () => blip.getPermissionsObject(),
    // segment: () => {},
    // getUserContext: () => {},
    // getToken: () => {},
    // getAccount: () => {},
    // sendApplicationRequest: () => {},
    // unauthorizedAccess: () => {},
    // addTenantPrefixToUrl: () => {},
    // getTenantUrl: () => {},
    getTenantPlan: () => blip.getTenantPlan({ tenantId: 'csgrowth' }),
    // inviteUser: () => {},
    // changeLocation: () => {},
    // changePath: () => {},
    // showUploadErrorToast: () => {},
    // showAlert: () => {},
    // redirectProcessor: () => {},
    // redirectToApplicationList: () => {},
    // redirectToSubscriptionNotificationPayment: () => {},
    // closeSidebar: () => {},
  },
  commands: {
    TEST: () =>
      blip.sendCommand({
        command: {
          method: 'get',
          uri: 'lime://solutionslabrouter@msging.net/threads-merged/73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter%400mn.io?$take=20&direction=desc&refreshExpiredMedia=true',
        },
      }),
    getThreads: () =>
      blip.getThreads({
        ownerIdentity: 'solutionslabrouter@msging.net',
        // getFromOriginator: false,
        identity:
          '73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter@0mn.io',
        merged: true,
        take: 20,
      }),
    getAccount: () => blip.getAccount(),
    // getTickets: () => blip.getTickets(),
    getTicketsHistory: () =>
      blip.getTicketsHistory({
        // filter:
        //   "storageDate ge datetimeoffset'2023-09-02T03:00:00.000Z' and storageDate le datetimeoffset'2023-10-04T02:59:00.000Z' and status ne 'Open' and status ne 'Waiting'",
        // take: 20,
        // skip: 0,
      }),
    getContacts: blip.getContacts(),
    getTunnelAccount: () =>
      blip.getTunnelAccount({
        identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
      }),
    getAttendants: () => blip.getAttendants(),
    getAttendant: () =>
      blip.getAttendant({
        identity: 'heloi.neto%40blip.ai@blip.ai',
      }),
  },
} as const;

// lime://solutionslabrouter@msging.net/threads-merged/73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter%400mn.io&direction=desc&refreshExpiredMedia=true&$take=20
// lime://solutionslabrouter@msging.net/threads-merged/73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter%400mn.io?$take=20&direction=desc&refreshExpiredMedia=true
export type BlipFns = typeof blipFns;
export type Category = keyof BlipFns;
export type BlipFnName<TCategory extends Category> = keyof BlipFns[TCategory];
export type BlipFn<TCategory extends Category> =
  BlipFnName<TCategory>[keyof BlipFnName<TCategory>];

export default blipFns;
