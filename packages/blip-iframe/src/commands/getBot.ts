import sendCommand from '../actions/sendCommand';

export default async function getBot(fullIdentity: string) {
  return await sendCommand<GetBotResponse>({
    destination: 'BlipService',
    command: {
      method: 'get',
      to: 'postmaster@portal.blip.ai',
      uri: `/applications/${fullIdentity}`,
    },
  });
}

export type GetBotResponse = unknown;
