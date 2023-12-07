import { sendMessage } from '../lib';

/**
 * Hides the top navigation bar of the blip platform
 *
 * This can be useful if you want to create a full screen extension
 */
export function hideNavbar() {
  return sendMessage({
    action: 'hideNavbar',
  });
}

export interface HideNavbarRequest {
  action: 'hideNavbar';
}
