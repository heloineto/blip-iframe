import { blip } from 'blip-iframe';

const blipFns = {
  actions: {
    // sendCommand: () => {},
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
    hideNavbar: () => blip.hideNavbar(),
    showNavbar: () => blip.showNavbar(),
    // changeSubheaderTitle: () => {},
    getCurrentLanguage: () => blip.getCurrentLanguage(),
    toast: () =>
      blip.toast({
        title: 'Hello World',
        message: 'Hello World',
        type: 'success',
        duration: 5000,
      }),
    getApplication: () => blip.getApplication(),
    // hasPermissions: () => {},
    // getPermissionsObject: () => {},
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
    getAccount: () => blip.getAccount(),
    getTickets: () => blip.getTickets(),
    getTicketsHistory: () => blip.getTicketsHistory(),
    getContacts: blip.getContacts(),
    getTunnelAccount: () =>
      blip.getTunnelAccount({
        identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
      }),
    getThreads: () =>
      blip.getThreads({
        ownerIdentity: 'solutionslabrouter@msging.net',
      }),
    getAttendants: () => blip.getAttendants(),
    getAttendant: () =>
      blip.getAttendant({
        identity: 'heloi.neto%40blip.ai@blip.ai',
      }),
  },
} as const;

export type BlipFns = typeof blipFns;
export type Category = keyof BlipFns;
export type BlipFnName<TCategory extends Category> = keyof BlipFns[TCategory];
export type BlipFn<TCategory extends Category> =
  BlipFnName<TCategory>[keyof BlipFnName<TCategory>];

export default blipFns;