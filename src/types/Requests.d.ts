interface RequestSegment {
    action: 'segment';
    content: {
        method: 'createApplicationTrack';
        parameters: {
            trackEvent: string;
            payload: Record<string, unknown>;
        };
    };
}

interface RequestHeightChange {
    action: 'heightChange';
    content: number;
}

interface RequestShowModal {
    action: 'showModal';
    content: {
        title: string;
        body: string;
        confirm: string;
        cancel: string;
    };
}

type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';

interface RequestShowToast {
    action: 'toast';
    content: {
        type: ToastTypes;
        message: string;
        title?: string;
        duration?: number;
    };
}

interface RequestStartLoading {
    action: 'startLoading';
}

interface RequestStopLoading {
    action: 'stopLoading';
}
