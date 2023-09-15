import React, { useMemo } from 'react';
import { Button, Group } from '@mantine/core';
import { createSpotlight, SpotlightProps, Spotlight } from '@mantine/spotlight';

export function SpotlightDemoBase(props: Partial<SpotlightProps>) {
  const [store, actions] = useMemo(createSpotlight, []);
  return (
    <>
      <Group justify="center">
        <Button onClick={actions.open}>Open spotlight</Button>
      </Group>
      <Spotlight actions={[]} store={store} {...props} />
    </>
  );
}
