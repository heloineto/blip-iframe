import { IframeMessageProxy } from 'iframe-message-proxy';
import log from '../lib/utils/log';

export default async function sendCommand<
  TResponse = unknown,
  TWrappedResponse extends WrappedSendCommandResponse<TResponse> = WrappedSendCommandResponse<TResponse>
>(content: SendCommandRequest['content']) {
  try {
    log.request(content.command.uri, content);

    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content,
    })) as TWrappedResponse;

    log.response(content.command.uri, response);

    return { response, error: null };
  } catch (error) {
    log.error(content.command.uri, error);

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

export interface WrappedSendCommandResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}
