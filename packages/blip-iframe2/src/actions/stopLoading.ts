import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Sends a message to the Blip Platform to stop showing a loading indicator.
 */
export default async function stopLoading() {
  await IframeMessageProxy.sendMessage({ action: 'stopLoading' });
}

export interface StopLoadingRequest {
  action: 'stopLoading';
}
