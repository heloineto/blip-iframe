import { IframeMessageProxy } from 'iframe-message-proxy';

const sendCommand = async (content: RequestSendCommand['content']) => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content
        })) as WrappedSendCommandResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export interface RequestSendCommand {
    action: 'sendCommand';
    content: {
        destination: 'BlipService' | 'MessagingHubService';
        command: {
            method: 'get' | 'set' | 'delete' | 'observe' | 'subscribe';
            to: string;
            uri: string;
        };
    };
}

export interface WrappedSendCommandResponse {
    response: SendCommandResponse;
    trackingProperties: { id: string };
}

export type SendCommandResponse = unknown;

export default sendCommand;
