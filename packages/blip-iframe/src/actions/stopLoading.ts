import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Stops showing the loading indicator in the Blip platform.
 */
export default async function stopLoading() {
  void IframeMessageProxy.sendMessage({ action: 'stopLoading' });
}

export interface StopLoadingRequest {
  action: 'stopLoading';
}
