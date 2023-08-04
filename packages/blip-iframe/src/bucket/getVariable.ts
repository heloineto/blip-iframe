import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function getVariable<TResponse>(variableKey: string) {
  try {
    const response = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        destination: 'MessagingHubService',
        command: {
          method: 'get',
          uri: `/buckets/${variableKey}`,
        },
      },
    })) as TResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}
