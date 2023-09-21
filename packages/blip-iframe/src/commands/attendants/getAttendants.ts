import { IframeMessageProxy } from 'iframe-message-proxy';

// TODO: Fix, this does not work
export default async function getAttendants() {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        destination: 'BlipService',
        command: {
          method: 'get',
          to: 'postmaster@desk.blip.ai',
          uri: '/attendants',
        },
      },
    })) as WrappedGetAttendantsResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetAttendantsResponse {
  response: GetAttendantsResponse;
  trackingProperties: { id: string };
}

export type GetAttendantsResponse = unknown;
