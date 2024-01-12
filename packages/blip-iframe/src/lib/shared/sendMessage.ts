import { IframeMessageProxy } from 'iframe-message-proxy';
import { Message } from '../../types';
import { parseError } from '../utils';

export interface WrappedResponse<TResponse> {
  response: TResponse;
  trackingProperties: { id: string };
}

// export type Sender = (
//   message: Message
// ) => Promise<
//   { success: true; data: unknown } | { success: false; error: Error }
// >;

export type Sender = typeof sendMessage;

export const sendMessage = async <
  TResponse = unknown,
  TWrappedResponse extends WrappedResponse<TResponse> = WrappedResponse<TResponse>
>(
  message: Message
) => {
  try {
    const { response } = (await IframeMessageProxy.sendMessage(
      message
    )) as TWrappedResponse;
    return { success: true, data: response } as const;
  } catch (error) {
    return { success: false, error: parseError(error) } as const;
  }
};
