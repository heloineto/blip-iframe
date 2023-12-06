import { IframeMessageProxy } from 'iframe-message-proxy';
import { Message } from '../../types';
import { parseError } from '../utils';
import logger from '../utils/logger';

export interface WrappedResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}

export type Client<TWrappedResponse> = (
  message: Message
) => Promise<TWrappedResponse>;

export interface Options<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
> {
  debug?: boolean;
  client?: Client<TWrappedResponse>;
}



export async function sendMessage<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(message: Message, options?: Options) {
  const log = logger(message, options?.debug);
  const client = options?.client ?? IframeMessageProxy.sendMessage;

  try {
    log.request(message);
    const { response } = (await client(message)) as TWrappedResponse;
    log.response(response);

    return { response, error: null };
  } catch (error) {
    log.error(error);
    return { response: null, error: parseError(error) };
  }
}
