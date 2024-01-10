import { sendMessage } from '../lib';

export interface HideNavbarParams {}

/**
 * Hides the top navigation bar of the blip platform
 *
 * This can be useful if you want to create a full screen extension
 */
export function hideNavbar(params?: HideNavbarParams, sender = sendMessage) {
  return sender({ action: 'hideNavbar' });
}

export interface HideNavbarRequest {
  action: 'hideNavbar';
}
