import type { GetThreadsContent, GetThreadsItem } from 'blip-iframe';
import clsx from 'clsx';

interface Props {
  message: GetThreadsItem;
}

export default function JsonMessage({ message }: Props) {
  const content = message.content as GetThreadsContent;

  return (
    <li className={clsx('flex items-start justify-center')}>
      <div className={clsx('whitespace-pre-wrap rounded-lg px-3 py-1.5')}>
        Ticket #{content.sequentialId}
      </div>
    </li>
  );
}
