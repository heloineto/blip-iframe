import { Avatar, Flex } from '@mantine/core';

interface Props {
  avatar?: string;
  attendant: string;
}

export default function AttendantCell({ attendant, avatar }: Props) {
  return (
    <Flex gap="sm" align="center">
      <Avatar radius={999} src={avatar} alt={attendant} />
      <p
        style={{
          whiteSpace: 'nowrap',
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {attendant}
      </p>
    </Flex>
  );
}
