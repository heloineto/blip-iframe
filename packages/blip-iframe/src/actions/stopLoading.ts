import { sendMessage } from '../lib';

export interface StopLoadingParams {}

/**
 * Stops showing the loading indicator in the Blip platform.
 */
export function stopLoading(params?: StopLoadingParams, sender = sendMessage) {
  return sender({ action: 'stopLoading' });
}

export interface StopLoadingRequest {
  action: 'stopLoading';
}
