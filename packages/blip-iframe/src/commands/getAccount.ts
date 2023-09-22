import { sendCommand } from '../actions';

export default async function getAccount() {
  return await sendCommand<GetAccountResponse>({
    destination: 'BlipService',
    command: {
      method: 'get',
      uri: '/account',
    },
  });
}

export interface GetAccountResponse {
  fullName: string;
  alternativeAccount: string;
  identity: string;
  email: string;
  phoneNumber: string;
  photoUri: string;
  timeZoneName: string;
  culture: string;
  extras: {
    lastUsedTenants: string;
    cookies: string;
    acceptedPlugins: string;
  };
  creationDate: string;
}
