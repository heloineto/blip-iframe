import { IframeMessageProxy, buildAuthorizationKey, imp } from 'blip-iframe';

export default function configureFetcher() {
  const botShortName = process.env.REACT_APP_BOT_SHORT_NAME as string;
  const botAccessKey = process.env.REACT_APP_BOT_ACCESS_KEY as string;

  imp.setFetcher(async (message) => {
    if (message.action !== 'sendCommand') {
      return await IframeMessageProxy.sendMessage(message);
    }

    const headers = {
      Authorization: buildAuthorizationKey({ botShortName, botAccessKey }),
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({
      id: crypto.randomUUID(),
      ...message.content.command,
    });

    const response = await fetch('https://msging.net/commands', {
      method: 'POST',
      headers,
      body,
      redirect: 'follow',
    });

    const json = (await response.json()) as {
      resource: Record<string, unknown>;
    };

    return { response: json.resource };
  });
}
