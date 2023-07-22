import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function getAccount() {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                command: {
                    method: 'get',
                    uri: '/account',
                },
                destination: 'BlipService',
            },
        })) as WrappedGetAccountResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
}

export interface WrappedGetAccountResponse {
    response: GetAccountResponse;
    trackingProperties: { id: string };
}

export interface GetAccountResponse {
    fullName: string;
    alternativeAccount: string;
    identity: string;
    email: string;
    phoneNumber: string;
    photoUri: string;
    timeZoneName: string;
    culture: string;
    extras: {
        lastUsedTenants: string;
        cookies: string;
        acceptedPlugins: string;
    };
    creationDate: string;
}
