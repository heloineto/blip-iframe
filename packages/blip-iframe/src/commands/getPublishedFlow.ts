import sendCommand from '../actions/sendCommand';

export default async function getPublishedFlow() {
  return await sendCommand<GetPublishedFlowResponse>({
    command: {
      method: 'get',
      uri: '/buckets/blip_portal:builder_published_flow',
    },
  });
}

// TODO: Define GetPublishedFlowResponse
export type GetPublishedFlowResponse = {
  [key: string]: {
    [key: string]: unknown;
  };
};
