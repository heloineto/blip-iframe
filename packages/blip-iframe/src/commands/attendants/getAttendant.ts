import { IframeMessageProxy } from 'iframe-message-proxy';

export interface GetAttendantParams {
  identity: string;
}

// TODO: Figure out if agent is the same as attendant
export default async function getAttendant({ identity }: GetAttendantParams) {
  console.log('getAttendant');

  try {
    const [name, domain] = identity.split('@');

    if (!name || !domain) {
      throw new Error(
        `Invalid identity. Expected format: "name@domain", got "${identity}"`
      );
    }

    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        destination: 'BlipService',
        command: {
          method: 'get',
          to: `postmaster@${domain}`,
          uri: `lime://${domain}/accounts/${encodeURIComponent(name)}`,
        },
      },
    })) as WrappedGetAttendantResponse;

    console.log(response);

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetAttendantResponse {
  response: GetAttendantResponse;
  trackingProperties: { id: string };
}

export type GetAttendantResponse = {
  fullName: string;
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
  source: string;
  creationDate: string;
};
