import { IframeMessageProxy } from 'iframe-message-proxy';

export type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';

const toast = async (content: ToastRequest['content']) => {
    await IframeMessageProxy.sendMessage({
        action: 'toast',
        content
    });
};

export interface ToastRequest {
    action: 'toast';
    content: {
        type: ToastTypes;
        message: string;
        title?: string;
        duration?: number;
    };
}

export default toast;
