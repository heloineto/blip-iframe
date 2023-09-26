import { IframeMessageProxy } from 'iframe-message-proxy';
import logger from './lib/utils/logger';
import { Message } from './types';

async function sendMessage<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(message: Message) {
  const log = logger(message);

  try {
    log.request(message);

    const { response } = (await IframeMessageProxy.sendMessage(
      message
    )) as TWrappedResponse;

    log.response(response);

    return { response, error: null };
  } catch (error) {
    log.error(error);

    return { response: null, error };
  }
}
export interface WrappedResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}

const imp = {
  sendMessage,
};

export default imp;
