import { IframeMessageProxy } from 'iframe-message-proxy';

const PORTAL_URL = 'postmaster@portal.blip.ai';

export default async function getBots(tenantId?: string) {
  try {
    const { response } = await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        timeout: 30000,
        destination: 'BlipService',
        command: {
          method: 'get',
          to: PORTAL_URL,
          uri:
            tenantId === undefined
              ? '/applications'
              : `/tenants/${tenantId}/applications`,
        },
      },
    });

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface GetBotsResponse {
  total: number;
  items: {
    name: string;
    shortName: string;
    imageUri?: string;
  }[];
}
