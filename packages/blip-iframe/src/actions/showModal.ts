import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Shows a modal dialog on the Blip platform with
 * a title, body, confirm and cancel button
 * @param params The modal parameters
 */
export async function showModal(params: ShowModalRequest['content']) {
  await IframeMessageProxy.sendMessage({
    action: 'showModal',
    content: params,
  });
}

export interface ShowModalRequest {
  action: 'showModal';
  content: {
    title?: string;
    body: string;
    confirm: string;
    cancel: string;
  };
}
