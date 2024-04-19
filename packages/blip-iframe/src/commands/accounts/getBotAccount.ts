// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { buildURI } from '../../lib/utils/buildURI';
import { BotAccount } from './types';

export interface GetBotAccountParams {}

export async function getBotAccount(
  _params?: GetBotAccountParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['account'],
  });

  return await sendCommand<GetBotAccountResponse>(
    {
      command: {
        method: 'get',
        uri: uri,
      },
    },
    sender
  );
}

export type GetBotAccountResponse = BotAccount;
