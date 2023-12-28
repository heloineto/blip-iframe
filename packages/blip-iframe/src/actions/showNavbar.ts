import { sendMessage } from '../lib';

export interface ShowNavbarParams {}

/**
 * Shows the top navigation bar of the blip platform
 *
 * You will only see it take effect if the navigation
 * bar is hidden (Ex.: after calling `hideNavbar`)
 */
export function showNavbar(params?: ShowNavbarParams, sender = sendMessage) {
  return sender({
    action: 'showNavbar',
  });
}

export interface ShowNavbarRequest {
  action: 'showNavbar';
}
