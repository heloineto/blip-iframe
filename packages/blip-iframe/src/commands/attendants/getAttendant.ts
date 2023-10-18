import { sendCommand } from '../../actions/sendCommand';

export interface GetAttendantParams {
  identity: string;
}

// TODO: Figure out if agent is the same as attendant
export async function getAttendant({ identity }: GetAttendantParams) {
  const [name, domain] = identity.split('@');

  if (!name || !domain) {
    throw new Error(
      `Invalid identity. Expected format: "name@domain", got "${identity}"`
    );
  }

  return await sendCommand<GetAttendantResponse>({
    destination: 'BlipService',
    command: {
      method: 'get',
      to: `postmaster@${domain}`,
      uri: `lime://${domain}/accounts/${encodeURIComponent(name)}`,
    },
  });
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
