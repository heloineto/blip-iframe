// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { buildURI } from '../../lib/utils/buildURI';
import { BotAccount } from './types';

export interface SetBotAccountParams {
  account: BotAccount;
}

export async function setBotAccount(
  { account }: SetBotAccountParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['account'],
  });

  return await sendCommand<SetBotAccountResponse>(
    {
      command: {
        method: 'set',
        type: 'application/vnd.lime.account+json',
        uri,
        resource: account,
      },
    },
    sender
  );
}

export type SetBotAccountResponse = {};
