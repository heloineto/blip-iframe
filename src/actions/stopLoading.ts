import { IframeMessageProxy } from 'iframe-message-proxy';

const stopLoading = async () => {
  await IframeMessageProxy.sendMessage({ action: 'stopLoading' });
};

export interface StopLoadingRequest {
  action: 'stopLoading';
}

export default stopLoading;
