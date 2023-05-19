import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Shows the top navigation bar of the blip platform.
 *
 * You will only see it take effect if the navigation bar is hidden (hideNavbar action)
 */
const showNavbar = async () => {
  await IframeMessageProxy.sendMessage({
    action: 'hideNavbar'
  });
};

export interface ShowNavbarRequest {
  action: 'showNavbar';
}

export default showNavbar;
