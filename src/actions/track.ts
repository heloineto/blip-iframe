import { IframeMessageProxy } from 'iframe-message-proxy';

const segment = async (content: RequestSegment['content']) => {
    await IframeMessageProxy.sendMessage({
        action: 'segment',
        content
    });
};

export interface RequestSegment {
    action: 'segment';
    content: {
        method: 'createApplicationTrack';
        parameters: {
            trackEvent: string;
            payload: Record<string, unknown>;
        };
    };
}

export default segment;
