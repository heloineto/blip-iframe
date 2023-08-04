import Request from './request';

interface IframeMessageProxy {
  config: (options?: Options) => IframeMessageProxy;
  listen: () => void;
  stopListen: () => void;
  sendMessage: (payload: Message) => Promise<{
    response: unknown;
    trackingProperties: TrackingProperties;
  }>;
}

export type Message = Request & {
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

export default IframeMessageProxy;
