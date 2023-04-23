import { IframeMessageProxy } from 'iframe-message-proxy';
import { PORTAL_URL } from '../../constants';

const getBot = async (fullIdentity: string) => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                destination: 'BlipService',
                command: {
                    method: 'get',
                    to: PORTAL_URL,
                    uri: `/applications/${fullIdentity}`
                }
            }
        })) as WrappedGetBotResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export interface WrappedGetBotResponse {
    response: GetBotResponse;
    trackingProperties: { id: string };
}

export type GetBotResponse = unknown;

export default getBot;
