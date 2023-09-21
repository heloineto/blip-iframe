import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function sendCommand(
  content: SendCommandRequest['content']
) {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content,
    })) as WrappedSendCommandResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface SendCommandRequest {
  action: 'sendCommand';
  content: {
    timeout?: number;
    destination?: 'BlipService' | 'MessagingHubService';
    command: {
      method:
        | 'get'
        | 'set'
        | 'merge'
        | 'delete'
        | 'subscribe'
        | 'unsubscribe'
        | 'observe';
      to?: string;
      uri: string;
      type?: string;
      [key: string]: unknown;
    };
  };
}

export interface WrappedSendCommandResponse {
  response: SendCommandResponse;
  trackingProperties: { id: string };
}

export type SendCommandResponse = unknown;
