import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Starts showing a loading indicator in the Blip platform.
 */
export default async function startLoading() {
  void IframeMessageProxy.sendMessage({ action: 'startLoading' });
}

export interface StartLoadingRequest {
  action: 'startLoading';
}
