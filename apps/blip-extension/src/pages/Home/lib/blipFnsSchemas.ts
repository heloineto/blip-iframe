import { blip } from 'blip-iframe';
import { getApplication } from './schemas/getApplication';

export const blipFnsSchemas = {
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
    getApplication,
    // getCurrentLanguage: () => blip.getCurrentLanguage(),
    // hideNavbar: () => blip.hideNavbar(),
    // sendCommand: () => {},
    // showNavbar: () => blip.showNavbar(),
    // changeSubheaderTitle: () => {},
    // toast: () =>
    //   blip.toast({
    //     title: 'Hello World',
    //     message: 'Hello World',
    //     type: 'success',
    //     duration: 1000,
    //     buttontext: "I'm a button",
    //   }),
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
    // getAccount: () => blip.getAccount(),
    // getTickets: () => blip.getTickets(),
    // getTicketsHistory: () => blip.getTicketsHistory(),
    // getContacts: blip.getContacts(),
    // getTunnelAccount: () =>
    //   blip.getTunnelAccount({
    //     identity: '3394098f-47a6-48ec-a154-d13484e511c8@tunnel.msging.net',
    //   }),
    // getThreads: () =>
    //   blip.getThreads({
    //     ownerIdentity: 'solutionslabrouter@msging.net',
    //   }),
    // getAttendants: () => blip.getAttendants(),
    // getAttendant: () =>
    //   blip.getAttendant({
    //     identity: 'heloi.neto%40blip.ai@blip.ai',
    //   }),
  },
} as const;
