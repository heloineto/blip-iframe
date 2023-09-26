import imp from '../imp';

export interface SendCommandParams {
  /**
   * The timeout in milliseconds for the command to be executed
   */
  timeout?: number;
  /**
   * The service that will call the command. MessagingHubService is the default
   */
  destination?: 'BlipService' | 'MessagingHubService';
  /**
   * Properties of the command to be executed
   */
  command: {
    method:
      | 'get'
      | 'set'
      | 'merge'
      | 'delete'
      | 'subscribe'
      | 'unsubscribe'
      | 'observe';
    uri: string;
    to?: string;
    type?: string;
    from?: string;
    id?: string;
    metadata?: unknown;
    pp?: string;
    reason?: string;
    resource?: string;
    status?: string;
  };
}

/**
 * Sends a command through the Blip Commands API using MessagingHubService (default) or BlipService
 * @param params The parameters of the command
 * @returns The response of the command
 */
export default async function sendCommand<
  TResponse = unknown,
  TWrappedResponse extends WrappedSendCommandResponse<TResponse> = WrappedSendCommandResponse<TResponse>
>(params: SendCommandParams) {
  return await imp.sendMessage<TResponse, TWrappedResponse>({
    action: 'sendCommand',
    content: params,
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
      from?: string;
      id?: string;
      metadata?: unknown;
      pp?: string;
      reason?: string;
      resource?: unknown;
      status?: string;
    };
  };
}

export interface WrappedSendCommandResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}
