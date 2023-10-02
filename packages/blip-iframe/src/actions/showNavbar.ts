import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Shows the top navigation bar of the blip platform.
 *
 * You will only see it take effect if the navigation
 * bar is hidden (Ex.: after calling `hideNavbar`)
 */
export default async function showNavbar() {
  void IframeMessageProxy.sendMessage({
    action: 'showNavbar',
  });
}

export interface ShowNavbarRequest {
  action: 'showNavbar';
}
