import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function setBucketVariable<TVariable>(
  variableKey: string,
  variable: TVariable
) {
  try {
    const response = await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        destination: 'MessagingHubService',
        command: {
          method: 'set',
          uri: `/buckets/${variableKey}`,
          type: 'application/json',
          resource: variable,
        },
      },
    });

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}
