import { IframeMessageProxyRequest } from './iframe-message-proxy-request';

export interface IframeMessageProxyType {
  config: (options?: ImpOptions) => IframeMessageProxyType;
  listen: () => void;
  stopListen: () => void;
  sendMessage: (payload: Message) => Promise<{
    response: unknown;
    trackingProperties: TrackingProperties;
  }>;
}

export type Message = IframeMessageProxyRequest & {
  caller?: string;
  fireAndForget?: boolean;
};

export interface ImpOptions {
  prefix?: string;
  caller?: string;
  receiveWindow?: Window;
  targetWindow?: Window;
  shouldHandleMessage?: (message: {
    message: Message;
    trackingProperties: TrackingProperties;
  }) => boolean;
}

export interface TrackingProperties {
  id: string;
}
