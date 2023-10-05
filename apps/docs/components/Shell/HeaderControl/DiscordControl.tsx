import React from 'react';
import { HeaderControl } from './HeaderControl';
import classes from './DiscordControl.module.css';
import { DiscordIcon } from '@mantine/ds';
import { meta } from '@/lib/constants/meta';
import { Tooltip } from '@mantine/core';

export function DiscordControl() {
  return (
    <Tooltip label="Coming soon...">
      <div>
        <div style={{ pointerEvents: 'none' }}>
          <HeaderControl
            tooltip="Coming soon..."
            component="a"
            href={meta.discordLink}
            className={classes.discord}
          >
            <DiscordIcon size={20} />
          </HeaderControl>
        </div>
      </div>
    </Tooltip>
  );
}
