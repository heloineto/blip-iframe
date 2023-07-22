import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function segment(content: SegmentRequest['content']) {
    await IframeMessageProxy.sendMessage({
        action: 'segment',
        content,
    });
}

export interface SegmentRequest {
    action: 'segment';
    content: {
        method: 'createApplicationTrack';
        parameters: {
            trackEvent: string;
            payload: Record<string, unknown>;
        };
    };
}
