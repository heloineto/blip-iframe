import { sendCommand } from '../../actions/sendCommand';
import { ResponseError, Sender } from '../../lib';

export interface GetAttendantParams {
  /**
   * The attendant's identity, formatted as "name@domain"
   */
  identity: string;
}

export async function getAttendant(
  { identity }: GetAttendantParams,
  sender?: Sender
) {
  const [name, domain] = identity.split('@');

  if (!name || !domain) {
    return {
      success: false,
      error: new Error(
        `Invalid identity. Expected format: "name@domain", got "${identity}"`
      ),
    } as ResponseError;
  }

  return await sendCommand<GetAttendantResponse>(
    {
      destination: 'BlipService',
      command: {
        method: 'get',
        to: `postmaster@${domain}`,
        uri: `lime://${domain}/accounts/${encodeURIComponent(name)}`,
      },
    },
    sender
  );
}

export interface GetAttendantResponse {
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
}
