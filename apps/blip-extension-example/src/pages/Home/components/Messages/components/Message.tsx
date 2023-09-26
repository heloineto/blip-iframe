import type { GetThreadsContent, GetThreadsItem } from 'blip-iframe';
import clsx from 'clsx';

interface Props {
  message: GetThreadsItem;
}

function TextMessage({ message }: Props) {
  const isSent = message.direction === 'sent';

  return (
    <li className={clsx('flex', isSent ? 'justify-end' : '')}>
      <div
        className={clsx(
          'w-fit whitespace-pre-wrap rounded-lg px-3 py-1.5',
          isSent
            ? 'bg-blue-8 ml-20 rounded-br-none'
            : 'dark:bg-dark-9 mr-20 rounded-bl-none'
        )}
      >
        {message.content as string}
      </div>
    </li>
  );
}

function JsonMessage({ message }: Props) {
  const content = message.content as GetThreadsContent;

  return (
    <li className={clsx('flex items-start justify-center')}>
      <div className={clsx('whitespace-pre-wrap rounded-lg px-3 py-1.5')}>
        Ticket #{content.sequentialId}
      </div>
    </li>
  );
}

export default function Message({ message }: Props) {
  if (typeof message.content === 'string')
    return <TextMessage message={message} />;
  const isSent = message.direction === 'sent';

  if (typeof message.content === 'object') {
    return <JsonMessage message={message} />;
  }

  return (
    <li className={clsx('flex', isSent ? 'justify-end' : '')}>
      <div
        className={clsx(
          'w-fit whitespace-pre-wrap rounded-lg px-3 py-1.5',
          isSent
            ? 'bg-blue-8 ml-20 rounded-br-none'
            : 'dark:bg-dark-9 mr-20 rounded-bl-none'
        )}
      >
        {JSON.stringify(message.content, null, 2)}
      </div>
    </li>
  );
}
