import imp from '../imp';

/**
 * Gets the JWT token of the current user
 */
export function getToken() {
  return imp.sendMessage<GetTokenResponse>({
    action: 'getToken',
  });
}

export interface getTokenRequest {
  action: 'getToken';
}

export type GetTokenResponse = string;
