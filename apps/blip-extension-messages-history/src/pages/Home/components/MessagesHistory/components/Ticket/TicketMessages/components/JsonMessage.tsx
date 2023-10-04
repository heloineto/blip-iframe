import type { GetThreadsContent, GetThreadsItem } from 'blip-iframe';

interface Props {
  message: GetThreadsItem;
}

export default function JsonMessage({ message }: Props) {
  const content = message.content as GetThreadsContent;

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          whiteSpace: 'pre-wrap',
          borderRadius: '0.375rem',
          padding: '0.375rem 0.75rem',
        }}
      >
        Ticket #{content.sequentialId}
      </div>
    </li>
  );
}
