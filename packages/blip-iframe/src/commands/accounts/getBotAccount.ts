// TODO: Add to docs
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';
import { BotAccount } from './types';

export interface GetBotAccountParams extends BuildParams {}

export async function getBotAccount(
  { ...buildParams }: GetBotAccountParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['account'],
    ...buildParams,
  });

  return await sendCommand<GetBotAccountResponse>(
    {
      command: {
        method: 'get',
        uri,
      },
    },
    sender
  );
}

export type GetBotAccountResponse = BotAccount;
