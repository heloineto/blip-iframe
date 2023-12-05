import { IframeMessageProxy } from 'iframe-message-proxy';
import { Message } from '../../types';
import { parseError } from '../utils';
import logger from '../utils/logger';

export interface WrappedResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}

export interface Options<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
> {
  debug?: boolean;
  fetcher?: Fetcher<TWrappedResponse>;
}

export type Fetcher<TWrappedResponse> = (
  message: Message
) => Promise<TWrappedResponse>;

export async function sendMessage<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(message: Message, options?: Options) {
  const log = logger(message, options?.debug);
  const fetcher = options?.fetcher ?? IframeMessageProxy.sendMessage;

  try {
    log.request(message);
    const { response } = (await fetcher(message)) as TWrappedResponse;
    log.response(response);

    return { response, error: null };
  } catch (error) {
    log.error(error);
    return { response: null, error: parseError(error) };
  }
}
