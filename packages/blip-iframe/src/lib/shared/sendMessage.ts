import { IframeMessageProxy } from 'iframe-message-proxy';
import { Message } from '../../types';
import { parseError } from '../utils';

export interface WrappedResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}

export type Sender = typeof sendMessage;

export type SenderReturn<TResponse> =
  | {
      success: true;
      data: TResponse;
    }
  | {
      success: false;
      error: Error;
    };

export const sendMessage = async <
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(
  message: Message
): Promise<SenderReturn<TResponse>> => {
  try {
    const { response } = (await IframeMessageProxy.sendMessage(
      message
    )) as TWrappedResponse;
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: parseError(error) };
  }
};
