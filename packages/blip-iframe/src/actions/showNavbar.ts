import imp from '../imp';

/**
 * Shows the top navigation bar of the blip platform.
 *
 * You will only see it take effect if the navigation
 * bar is hidden (Ex.: after calling `hideNavbar`)
 */
export function showNavbar() {
  void imp.sendMessage({
    action: 'showNavbar',
  });
}

export interface ShowNavbarRequest {
  action: 'showNavbar';
}
