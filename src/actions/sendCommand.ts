import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function sendCommand(
    content: SendCommandRequest['content']
) {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content,
        })) as WrappedSendCommandResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
}

export interface SendCommandRequest {
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
