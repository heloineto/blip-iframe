import { BlipRequest } from './blip-request';

export interface IframeMessageProxyType {
  config: (options?: Options) => IframeMessageProxyType;
  listen: () => void;
  stopListen: () => void;
  sendMessage: (payload: Message) => Promise<{
    response: unknown;
    trackingProperties: TrackingProperties;
  }>;
}

export type Message = BlipRequest & {
  caller?: string;
  fireAndForget?: boolean;
};

export interface Options {
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
