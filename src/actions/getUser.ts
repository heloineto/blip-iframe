import { IframeMessageProxy } from 'iframe-message-proxy';

const getUser = async () => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                command: {
                    method: 'get',
                    uri: '/account'
                },
                destination: 'BlipService'
            }
        })) as WrappedGetUserResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export interface WrappedGetUserResponse {
    response: GetUserResponse;
    trackingProperties: { id: string };
}

export interface GetUserResponse {
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

export default getUser;
