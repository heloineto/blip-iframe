import { IframeMessageProxy as _IframeMessageProxy } from 'iframe-message-proxy';
import { Message } from './types';

async function sendMessage<
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(payload: Message) {
  try {
    const { response } = (await _IframeMessageProxy.sendMessage(
      payload
    )) as TWrappedResponse;
    return { response, error: null };
  } catch (error) {
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
