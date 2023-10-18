import { sendCommand } from '../actions/sendCommand';

export default async function getBucketVariable<TResponse>(
  variableKey: string
) {
  return await sendCommand<TResponse>({
    destination: 'MessagingHubService',
    command: {
      method: 'get',
      uri: `/buckets/${variableKey}`,
    },
  });
}

export interface WrappedGetBucketVariableResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}
