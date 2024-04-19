import { IframeMessageProxy } from 'iframe-message-proxy';
import { Message } from '../../types';
import { parseError } from '../utils/parseError';

export interface WrappedResponse<TData> {
  response: TData;
  trackingProperties: { id: string };
}

export type Sender = typeof sendMessage;

export type ResponseSuccess<TData> = {
  success: true;
  data: TData;
};

export type ResponseError = {
  success: false;
  error: Error;
};

export type Response<TData> = ResponseSuccess<TData> | ResponseError;

export const sendMessage = async <
  TData = unknown,
  TWrappedResponse extends WrappedResponse<TData> = WrappedResponse<TData>
>(
  message: Message
): Promise<Response<TData>> => {
  try {
    const { response } = (await IframeMessageProxy.sendMessage(
      message
    )) as TWrappedResponse;
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: parseError(error) };
  }
};
