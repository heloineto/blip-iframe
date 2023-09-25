import type { GetThreadsItem } from 'blip-iframe';

export default function formatMessages(rawMessages: GetThreadsItem[]) {
  const messages = rawMessages.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  return messages;
}
