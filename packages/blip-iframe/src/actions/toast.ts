import imp from '../imp';

export type ToastType =
  | 'danger'
  | 'info'
  | 'refresh'
  | 'success'
  | 'warning'
  | 'undo'
  | 'redo';

export interface ToastParams {
  /**
   * The type of the toast message. It will change the icon, color and other styles of the toast
   */
  type: ToastType;
  /**
   * The message to be displayed in the toast.
   */
  message: string;
  /**
   * The title of the toast.
   */
  title?: string;
  /**
   * The duration in milliseconds for which the toast should be displayed.
   */
  duration?: number;
  /**
   * The text to be displayed on the button of the toast.
   */
  buttontext?: string;
}

/**
 * Shows a toast notification on the Blip platform
 * with a message, title a type and the duration is in milliseconds
 */
export function toast(params: ToastParams) {
  void imp.sendMessage({
    action: 'toast',
    content: params,
  });
}

export interface ToastRequest {
  action: 'toast';
  content: {
    type: ToastType;
    message: string;
    title?: string;
    duration?: number;
    buttontext?: string;
  };
}
