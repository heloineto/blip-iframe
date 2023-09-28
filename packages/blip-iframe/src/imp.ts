import { IframeMessageProxy } from 'iframe-message-proxy';
import logger from './lib/utils/logger';
import { Message } from './types';

export type Fetcher = (message: Message) => Promise<unknown>;

async function sendMessage<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(message: Message, fetcher: Fetcher = IframeMessageProxy.sendMessage) {
  const log = logger(message);

  try {
    log.request(message);

    const { response } = (await fetcher(message)) as TWrappedResponse;

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

class IMP {
  fetcher: Fetcher = (message: Message) => {
    return IframeMessageProxy.sendMessage(message);
  };

  sendMessage<
    TResponse = unknown,
    TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
  >(message: Message) {
    return sendMessage<TResponse, TWrappedResponse>(message, this.fetcher);
  }

  setFetcher(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }
}

const imp = new IMP();

export default imp;
