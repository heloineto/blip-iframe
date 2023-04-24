import { IframeMessageProxy } from 'iframe-message-proxy';

const heightChange = async (height: number) => {
    await IframeMessageProxy.sendMessage({
        action: 'heightChange',
        content: height
    });
};

export interface HeightChangeRequest {
    action: 'heightChange';
    content: number;
}

export default heightChange;
