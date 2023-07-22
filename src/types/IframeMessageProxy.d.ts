import Message from './Message';
import Options from './Options';
import TrackingProperties from './TrackingProperties';

interface IframeMessageProxy {
  config: (options?: Options) => IframeMessageProxy;
  listen: () => void;
  stopListen: () => void;
  sendMessage: (payload: Message) => Promise<{
    response: unknown;
    trackingProperties: TrackingProperties;
  }>;
}

export default IframeMessageProxy;
