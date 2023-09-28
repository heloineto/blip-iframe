import { Flex, Paper, ScrollArea } from '@mantine/core';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <Paper
      shadow="xs"
      className="flex h-[calc(100vh-80px)] flex-col overflow-auto"
    >
      <ScrollArea px="md">
        <Flex direction="column" py="md">
          {children}
        </Flex>
      </ScrollArea>
    </Paper>
  );
}
