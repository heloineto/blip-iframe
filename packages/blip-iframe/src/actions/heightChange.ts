import { sendMessage } from '../lib';

export interface HeightChangeParams {
  /**
   * The height of the extension's iframe parent.
   */
  height: number;
}

/**
 * Changes the height the extension's iframe parent.
 *
 * Note: The iframe parent has a minimum height of 100%,
 * So if you want the extension to take 100% of the remaining space,
 * pass 0 as the height.
 */
export function heightChange(
  { height }: HeightChangeParams,
  sender = sendMessage
) {
  return sender({
    action: 'heightChange',
    content: height,
  });
}

export interface HeightChangeRequest {
  action: 'heightChange';
  content: number;
}
