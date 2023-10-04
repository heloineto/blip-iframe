import { IframeMessageProxy, imp } from 'blip-iframe';

export default function configureFetcher(authorizationKey: string) {
  imp.setFetcher(async (message) => {
    if (message.action !== 'sendCommand') {
      return await IframeMessageProxy.sendMessage(message);
    }

    const headers = {
      Authorization: authorizationKey,
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
