import type { GetThreadsItem } from 'blip-iframe';
import JsonMessage from './JsonMessage';
import ReceivedMessageBubble from './ReceivedMessageBubble';
import SentMessageBubble from './SentMessageBubble';

interface Props {
  message: GetThreadsItem;
}

export default function Message({ message }: Props) {
  const isSent = message.direction === 'sent';

  if (typeof message.content === 'object') {
    return <JsonMessage message={message} />;
  }

  if (typeof message.content !== 'string') {
    return <>Unsupported message type</>;
  }

  return isSent ? (
    <SentMessageBubble message={message.content} />
  ) : (
    <ReceivedMessageBubble message={message.content} />
  );
}
