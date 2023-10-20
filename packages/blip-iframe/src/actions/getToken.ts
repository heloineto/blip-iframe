import imp from '../imp';

/**
 * Gets the JWT token of the current user
 * @returns The JWT token string of the current user
 */
export function getToken() {
  return imp.sendMessage<GetTokenResponse>({
    action: 'getToken',
  });
}

export interface GetTokenRequest {
  action: 'getToken';
}

export type GetTokenResponse = string;
