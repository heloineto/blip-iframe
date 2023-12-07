import { sendMessage } from '../lib';

export interface StartLoadingParams {}

/**
 * Starts showing a loading indicator in the Blip platform.
 */
export function startLoading(params: StartLoadingParams, sender = sendMessage) {
  return sender({ action: 'startLoading' });
}

export interface StartLoadingRequest {
  action: 'startLoading';
}
