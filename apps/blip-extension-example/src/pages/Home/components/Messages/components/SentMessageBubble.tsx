import { useMantineTheme } from '@mantine/core';

interface Props {
  message: string;
}

export default function SentMessageBubble({ message }: Props) {
  const theme = useMantineTheme();

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <div
        style={{
          width: 'fit-content',
          whiteSpace: 'pre-wrap',
          borderRadius: '0.375rem',
          padding: '0.375rem 0.75rem',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.blue[8]
              : theme.colors.blue[6],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[1]
              : theme.colors.gray[0],
          borderBottomRightRadius: 0,
          marginLeft: '5rem',
        }}
      >
        {message}
      </div>
    </li>
  );
}
