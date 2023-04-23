import { IframeMessageProxy } from 'iframe-message-proxy';

const getCurrentLanguage = async () => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'getCurrentLanguage'
        })) as WrappedGetCurrentLanguageResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export interface RequestGetCurrentLanguage {
    action: 'getCurrentLanguage';
}

export interface WrappedGetCurrentLanguageResponse {
    response: GetCurrentLanguageResponse;
    trackingProperties: { id: string };
}

export type GetCurrentLanguageResponse = string;

export default getCurrentLanguage;
