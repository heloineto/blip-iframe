import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Hides the top navigation bar of the blip platform.
 *
 * This can be useful if you want to create a full screen extension.
 */
export default async function hideNavbar() {
  await IframeMessageProxy.sendMessage({
    action: 'hideNavbar',
  });
}

export interface HideNavbarRequest {
  action: 'hideNavbar';
}
