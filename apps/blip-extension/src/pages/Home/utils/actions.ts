import { blip } from 'blip-iframe';

export const actions = [
  {
    value: 'addTenantPrefixToUrl',
    fn: () => blip.addTenantPrefixToUrl({ url: 'https://example.com' }),
  },
  { value: 'getAccount', fn: () => blip.getAccount() },
  { value: 'getApplication', fn: () => blip.getApplication() },
  { value: 'getCurrentLanguage', fn: () => blip.getCurrentLanguage() },
  { value: 'getPermissionsObject', fn: () => blip.getPermissionsObject() },
  { value: 'getToken', fn: () => blip.getToken() },
  // { value: 'hasPermissions', fn: () => blip.hasPermissions() },
  { value: 'heightChange', fn: () => blip.heightChange({ height: 0 }) },
  { value: 'hideNavbar', fn: () => blip.hideNavbar() },
  // { value: 'segment', fn: () => blip.segment() },
  // { value: 'sendCommand', fn: () => blip.sendCommand() },
  {
    value: 'showAlert',
    fn: () =>
      blip.showAlert({
        variant: 'danger',
        icon: 'air-balloon',
        title: 'Title',
        body: 'Body',
        buttons: {
          cancel: 'Cancel',
          confirm: 'Confirm',
        },
      }),
  },
  {
    value: 'showModal',
    fn: () =>
      blip.showModal({
        title: 'Delete Item',
        body: 'Are you sure you want to delete this item?',
        confirm: 'Delete',
        cancel: 'Cancel',
      }),
  },
  { value: 'showNavbar', fn: () => blip.showNavbar() },
  { value: 'startLoading', fn: () => blip.startLoading() },
  { value: 'stopLoading', fn: () => blip.stopLoading() },
  {
    value: 'toast',
    fn: () =>
      blip.toast({
        title: 'Hello World',
        message: 'Hello World',
        type: 'success',
        duration: 1000,
        buttontext: "I'm a button",
      }),
  },
  { value: 'unauthorizedAccess', fn: () => blip.unauthorizedAccess() },
  {
    value: 'uploadFile',
    fn: () =>
      blip.uploadFile({
        file: new File(['Hello, world!'], 'filename.txt', {
          type: 'text/plain',
        }),
        type: 'text/plain',
      }),
  },
];
