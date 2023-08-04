import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function getPublishedFlow() {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        command: {
          method: 'get',
          uri: '/buckets/blip_portal:builder_published_flow',
        },
      },
    })) as WrappedGetPublishedFlowResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetPublishedFlowResponse {
  response: GetPublishedFlowResponse;
  trackingProperties: { id: string };
}

// TODO: Define GetPublishedFlowResponse
export type GetPublishedFlowResponse = {
  [key: string]: {
    [key: string]: unknown;
  };
};
