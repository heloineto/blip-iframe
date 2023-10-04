import { FilterOutline, RefreshOutline } from '@blip-ds/react-icons';
import { ActionIcon, Flex, Text, Tooltip } from '@mantine/core';
import { MoreOptions } from '../MoreOptions';

export function OptionsBar() {
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
        <Tooltip
          label={
            <Text>
              Atualizar{' '}
              <Text italic span>
                {'(Em breve)'}
              </Text>
            </Text>
          }
        >
          <ActionIcon>
            <RefreshOutline size="1.125rem" />
          </ActionIcon>
        </Tooltip>
        <MoreOptions />
      </Flex>
    </Flex>
  );
}
