import { IframeMessageProxy } from 'iframe-message-proxy';

/**
 * Shows a toast notification on the main platform
 * with a message, title a type and the duration is in milliseconds
 *
 * @param content
 */
export default async function toast(content: ToastRequest['content']) {
  void IframeMessageProxy.sendMessage({
    action: 'toast',
    content,
  });
}

export type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';
export interface ToastRequest {
  action: 'toast';
  content: {
    type: ToastTypes;
    message: string;
    title?: string;
    duration?: number;
  };
}
