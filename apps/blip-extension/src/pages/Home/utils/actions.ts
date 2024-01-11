import { blip } from 'blip-iframe';
import { addTenantPrefixToUrlSchema } from './schemas/addTenantPrefixToUrlSchema';
import { getAccountSchema } from './schemas/getAccountSchema';
import { getApplicationSchema } from './schemas/getApplicationSchema';
import { getCurrentLanguageSchema } from './schemas/getCurrentLanguageSchema';
import { getPermissionsObjectSchema } from './schemas/getPermissionsObjectSchema';
import { getTokenSchema } from './schemas/getTokenSchema';
import { uploadFileSchema } from './schemas/uploadFileSchema';

export const actions = [
  {
    value: 'addTenantPrefixToUrl',
    fn: () => blip.addTenantPrefixToUrl({ url: 'https://example.com' }),
    schema: addTenantPrefixToUrlSchema,
  },
  {
    value: 'getAccount',
    fn: () => blip.getAccount(),
    schema: getAccountSchema,
  },
  {
    value: 'getApplication',
    fn: () => blip.getApplication(),
    schema: getApplicationSchema,
  },
  {
    value: 'getCurrentLanguage',
    fn: () => blip.getCurrentLanguage(),
    schema: getCurrentLanguageSchema,
  },
  {
    value: 'getPermissionsObject',
    fn: () => blip.getPermissionsObject(),
    schema: getPermissionsObjectSchema,
  },
  { value: 'getToken', fn: () => blip.getToken(), schema: getTokenSchema },
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
    fn: () => {
      return blip.uploadFile({
        file: new File(['Hello, world!'], 'filename.txt', {
          type: 'text/plain',
        }),
        type: 'text/plain',
      });
    },
    schema: uploadFileSchema,
  },
];
