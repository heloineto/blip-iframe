import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function getBot(fullIdentity: string) {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        destination: 'BlipService',
        command: {
          method: 'get',
          to: 'postmaster@portal.blip.ai',
          uri: `/applications/${fullIdentity}`,
        },
      },
    })) as WrappedGetBotResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetBotResponse {
  response: GetBotResponse;
  trackingProperties: { id: string };
}

export type GetBotResponse = unknown;
