import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Changes the height the extension's iframe parent
 *
 * Note: The iframe parent has a minimum height of 100%,
 * So if you want the extension to take 100% of the remaining space,
 * pass 0 as the height
 * @param height The height of the extension's iframe parent
 */
export default async function heightChange(height: number) {
    await IframeMessageProxy.sendMessage({
        action: 'heightChange',
        content: height,
        fireAndForget: true,
    });
}

export interface HeightChangeRequest {
    action: 'heightChange';
    content: number;
}
