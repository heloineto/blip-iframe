import { useMantineTheme } from '@mantine/core';

interface Props {
  message: string;
}

export default function ReceivedMessageBubble({ message }: Props) {
  const theme = useMantineTheme();

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'start',
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
              ? theme.colors.dark[6]
              : theme.colors.gray[2],
          color:
            theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
          borderBottomLeftRadius: 0,
          marginRight: '5rem',
        }}
      >
        {message}
      </div>
    </li>
  );
}
