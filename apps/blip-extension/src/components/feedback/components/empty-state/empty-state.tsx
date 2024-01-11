import type { FlexProps } from '@mantine/core';
import { Flex, Text, Title } from '@mantine/core';
import { Cube } from '@phosphor-icons/react/dist/ssr';
import type { ReactNode } from 'react';

export interface EmptyStateProps extends FlexProps {
  title?: string;
  description?: string;
  button?: ReactNode;
  icon?: ReactNode;
}

export function EmptyState(props: EmptyStateProps) {
  const {
    button,
    title = 'Nada aqui',
    description = 'Adicione um novo item para começar',
    style,
    icon,
    ...rest
  } = props;

  return (
    <Flex
      align="center"
      className="text-gray-8 dark:text-white"
      direction="column"
      gap="sm"
      justify="center"
      style={{ flex: 1, ...style }}
      {...rest}
    >
      {icon ?? <Cube size={38} />}
      <Flex align="center" direction="column" ta="center">
        <Title order={3}>{title}</Title>
        <Text c="dimmed" size="lg" ta="center">
          {description}
        </Text>
      </Flex>
      {button}
    </Flex>
  );
}
