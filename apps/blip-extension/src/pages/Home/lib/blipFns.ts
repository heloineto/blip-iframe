import { blip, buildAuthorizationKey } from 'blip-iframe';

const blipFns = {
  actions: {
    getAuthorizationKey: async () => {
      const { error, response } = await blip.getApplication();

      if (error || !response) return error;

      const { shortName, accessKey } = response;

      return buildAuthorizationKey({
        botShortName: shortName,
        botAccessKey: accessKey,
      });
    },
    // getApplicationUserAccounts: () => {
    //   return blip.getApplicationUserAccounts({
    //     shortName: 'testeheloi',
    //   });
    // },
    addTenantPrefixToUrl: () => {
      return blip.addTenantPrefixToUrl({
        url: 'https://example.com',
      });
    },
    // changeLocation: () => {},
    // changePath: () => {},
    // changeSubheaderTitle: () => {},
    // closeSidebar: () => {},
    getAccount: () => blip.getAccount(),
    getApplication: () => blip.getApplication(),
    getCurrentLanguage: () => blip.getCurrentLanguage(),
    getPermissionsObject: () => blip.getPermissionsObject(),
    // getTenantPlan: () => blip.getTenantPlan({ tenantId: 'csgrowth' }), // DON'T WORK
    // getTenantUrl: () => blip.getTenantUrl({ tenantId: 'csgrowth' }), // DON'T WORK
    getToken: () => blip.getToken(),
    getUserContext: () => blip.getUserContext(),
    hasPermissions: () => blip.hasPermissions(),
    heightChange: () => blip.heightChange({ height: 0 }),
    hideNavbar: () => blip.hideNavbar(),
    // inviteUser: () => {},
    // redirectProcessor: () => {},
    // redirectToApplicationList: () => blip.redirectToApplicationList(),
    // redirectToSubscriptionNotificationPayment: () => {},
    // removeOverlayAndReleaseScroll: () => {},
    segment: () => blip.segment({ method: 'createTrack', parameters: {} }),
    // sendApplicationRequest: () => {},
    sendCommand: () => {},
    showAlert: () => {
      return blip.showAlert({
        variant: 'danger',
        icon: 'air-balloon',
        title: 'Title',
        body: 'Body',
        buttons: {
          cancel: 'Cancel',
          confirm: 'Confirm',
        },
      });
    },
    // showChecklistModal: () => {},
    showModal: () => {
      return blip.showModal({
        title: 'Delete Item',
        body: 'Are you sure you want to delete this item?',
        confirm: 'Delete',
        cancel: 'Cancel',
      });
    },
    showNavbar: () => blip.showNavbar(),
    // showOverlayAndBlockScroll: () => {},
    // showStepperModal: () => {},
    // showUploadErrorToast: () => {},
    startLoading: () => blip.startLoading(),
    // state: () => {},
    // stateChangeSuccess: () => {},
    stopLoading: () => blip.stopLoading(),
    toast: () => {
      return blip.toast({
        title: 'Hello World',
        message: 'Hello World',
        type: 'success',
        duration: 1000,
        buttontext: "I'm a button",
      });
    },
    unauthorizedAccess: () => blip.unauthorizedAccess(),
    uploadFile: () => {
      const file = new File(['Hello, world!'], 'filename.txt', {
        type: 'text/plain',
      });

      return blip.uploadFile({
        file: file,
        type: file.type,
      });
    },
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
    // getTickets: () => blip.getTickets(),
    getTicketsHistory: () =>
      blip.getTicketsHistory({
        // filter:
        //   "storageDate ge datetimeoffset'2023-09-02T03:00:00.000Z' and storageDate le datetimeoffset'2023-10-04T02:59:00.000Z' and status ne 'Open' and status ne 'Waiting'",
        // take: 20,
        // skip: 0,
      }),
    getContacts: () => blip.getContacts(),
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

export type BlipFns = typeof blipFns;
export type Category = keyof BlipFns;
export type BlipFnName<TCategory extends Category> = keyof BlipFns[TCategory];
export type BlipFn<TCategory extends Category> =
  BlipFnName<TCategory>[keyof BlipFnName<TCategory>];

export default blipFns;
