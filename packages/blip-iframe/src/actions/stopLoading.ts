import imp from '../imp';

/**
 * Stops showing the loading indicator in the Blip platform.
 */
export default async function stopLoading() {
  void imp.sendMessage({ action: 'stopLoading' });
}

export interface StopLoadingRequest {
  action: 'stopLoading';
}
