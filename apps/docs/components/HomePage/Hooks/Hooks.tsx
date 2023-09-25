import React from 'react';
import { Box } from '@mantine/core';
import {
  IconArrowsMaximize,
  IconClock,
  IconForms,
  IconHandOff,
  IconMaximize,
  IconResize,
} from '@tabler/icons-react';
import { Demo } from '@mantine/ds';
import { FormDemos, HooksDemos } from '@/mantine-demos';
import { DemoTabs } from '../DemoTabs/DemoTabs';
import classes from './Hooks.module.css';

const data = [
  {
    demo: () => (
      <div className={classes.demoWrapper}>
        <Demo data={HooksDemos.useElementSizeDemo} />
      </div>
    ),
    icon: IconResize,
    name: 'use-element-size',
    description: 'Subscribe to element size changes',
  },
  {
    demo: () => (
      <div className={classes.demoWrapper}>
        <Demo data={HooksDemos.useDebouncedValueUsage} />
      </div>
    ),
    icon: IconClock,
    name: 'use-debounced-value',
    description: 'Debounce value changes',
  },
  {
    demo: () => (
      <div className={classes.demoWrapper}>
        <Demo data={HooksDemos.useIdleDemo} />
      </div>
    ),
    icon: IconHandOff,
    name: 'use-idle',
    description: 'Detect if user does nothing',
  },
  {
    demo: () => (
      <div className={classes.demoWrapper}>
        <Demo data={HooksDemos.useFullscreenDemo} />
      </div>
    ),
    icon: IconMaximize,
    name: 'use-fullscreen',
    description: 'Enter/exit fullscreen',
  },
  {
    demo: () => (
      <div className={classes.demoWrapper}>
        <Demo data={HooksDemos.useMoveUsage} />
      </div>
    ),
    icon: IconArrowsMaximize,
    name: 'use-move',
    description: 'Slide behavior over any element',
  },
  {
    demo: () => (
      <div className={classes.demoWrapper}>
        <Demo data={FormDemos.usage} />
      </div>
    ),
    icon: IconForms,
    name: 'use-form',
    description: 'Forms management library',
  },
];

export function Hooks() {
  return (
    <Box
      className={classes.demo}
      // sx={(theme) => ({
      //   '& .mantine-Prism-code': {
      //     backgroundColor: `${
      //       theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      //     } !important`,
      //   },

      //   '& .mantine-CodeDemo-root': {
      //     marginTop: 0,
      //     boxShadow: theme.shadows.md,
      //   },
      // })}
    >
      <DemoTabs data={data} title="Hooks library" />
    </Box>
  );
}
