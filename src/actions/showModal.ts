import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Shows a modal dialog on the main platform with
 * a title, body, confirm and cancel button
 * @param content
 */
const showModal = async (content: ShowModalRequest['content']) => {
  await IframeMessageProxy.sendMessage({
    action: 'showModal',
    content
  });
};

export interface ShowModalRequest {
  action: 'showModal';
  content: {
    title?: string;
    body: string;
    confirm: string;
    cancel: string;
  };
}

export default showModal;
