import { sendMessage } from '../lib';

export interface GetTokenParams {}

/**
 * Gets the JWT token of the current user
 * @returns The JWT token string of the current user
 */
export function getToken(params?: GetTokenParams, sender = sendMessage) {
  return sender<GetTokenResponse>({
    action: 'getToken',
  });
}

export interface GetTokenRequest {
  action: 'getToken';
}

export type GetTokenResponse = string;
