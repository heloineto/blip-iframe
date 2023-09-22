import { sendCommand } from '../actions';

export default async function getBots(tenantId?: string) {
  return await sendCommand<GetBotsResponse>({
    timeout: 30000,
    destination: 'BlipService',
    command: {
      method: 'get',
      to: 'postmaster@portal.blip.ai',
      uri:
        tenantId === undefined
          ? '/applications'
          : `/tenants/${tenantId}/applications`,
    },
  });
}

export interface GetBotsResponse {
  total: number;
  items: {
    name: string;
    shortName: string;
    imageUri?: string;
  }[];
}
