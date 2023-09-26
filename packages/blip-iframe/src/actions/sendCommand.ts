import imp from '../imp';

export type SendCommandParams = SendCommandRequest['content'];

export default async function sendCommand<
  TResponse = unknown,
  TWrappedResponse extends WrappedSendCommandResponse<TResponse> = WrappedSendCommandResponse<TResponse>
>(content: SendCommandParams) {
  return await imp.sendMessage<TResponse, TWrappedResponse>({
    action: 'sendCommand',
    content,
  });
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
