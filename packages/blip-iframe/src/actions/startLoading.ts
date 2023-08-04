import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Sends a message to the Blip Platform to start showing a loading indicator.
 */
export default async function startLoading() {
  await IframeMessageProxy.sendMessage({ action: 'startLoading' });
}

export interface StartLoadingRequest {
  action: 'startLoading';
}
