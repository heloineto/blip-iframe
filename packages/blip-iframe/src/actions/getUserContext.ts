import imp from '../imp';

// TODO: Verify, does not work
export function getUserContext() {
  return imp.sendMessage<GetUserContextResponse>({
    action: 'getUserContext',
  });
}

export interface GetUserContextRequest {
  action: 'getUserContext';
}

export type GetUserContextResponse = string;
