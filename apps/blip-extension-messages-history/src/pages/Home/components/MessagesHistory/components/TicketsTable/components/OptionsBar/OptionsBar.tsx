import { FilterOutline, RefreshOutline } from '@blip-ds/react-icons';
import { ActionIcon, Flex, Text, Tooltip } from '@mantine/core';
import { MoreOptions } from '../MoreOptions';
import type { TicketsQuery } from '../../hooks/useTicketsQuery';

interface Props {
  ticketsQuery: TicketsQuery;
}

export function OptionsBar({ ticketsQuery }: Props) {
  return (
    <Flex justify="space-between" align="center">
      <Tooltip
        label={
          <Text>
            Filtrar{' '}
            <Text italic span>
              {'(Em breve)'}
            </Text>
          </Text>
        }
      >
        <ActionIcon>
          <FilterOutline size="1.125rem" />
        </ActionIcon>
      </Tooltip>
      <Flex gap="sm">
        <ActionIcon
          onClick={() => {
            ticketsQuery.remove();
            void ticketsQuery.refetch();
          }}
        >
          <RefreshOutline size="1.125rem" />
        </ActionIcon>
        <MoreOptions />
      </Flex>
    </Flex>
  );
}
