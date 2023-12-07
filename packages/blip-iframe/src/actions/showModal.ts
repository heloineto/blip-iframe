import { sendMessage } from '../lib';

/**
 * Shows a modal dialog on the Blip platform with
 * a title, body, confirm and cancel button
 * @param params The modal parameters
 */
export function showModal(
  params: ShowModalRequest['content'],
  sender = sendMessage
) {
  return sender({
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
