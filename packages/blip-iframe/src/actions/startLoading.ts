import imp from '../imp';

/**
 * Starts showing a loading indicator in the Blip platform.
 */
export default async function startLoading() {
  void imp.sendMessage({ action: 'startLoading' });
}

export interface StartLoadingRequest {
  action: 'startLoading';
}
