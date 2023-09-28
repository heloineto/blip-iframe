import { useQuery } from '@tanstack/react-query';
import {
  IframeMessageProxy,
  blip,
  buildAuthorizationKey,
  imp,
} from 'blip-iframe';
import blipQueryFn from '../utils/queryFn';

const botShortName = import.meta.env.VITE_BOT_SHORT_NAME as string;
const botAccessKey = import.meta.env.VITE_BOT_ACCESS_KEY as string;

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

// TODO: Figure out what to do when the params is optional
export default function useTickets() {
  return useQuery({
    queryKey: ['getTickets'],
    queryFn: () => blipQueryFn(blip.getTickets()),
  });
}
