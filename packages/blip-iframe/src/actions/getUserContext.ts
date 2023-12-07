import { sendMessage } from "../lib";

// TODO: Verify, does not work
export function getUserContext() {
  return sendMessage<GetUserContextResponse>({
    action: 'getUserContext',
  });
}

export interface GetUserContextRequest {
  action: 'getUserContext';
}

export type GetUserContextResponse = string;
