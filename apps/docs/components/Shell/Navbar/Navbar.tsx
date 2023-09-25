import React from 'react';
import { IconCompass, IconApi, IconHeartHandshake } from '@tabler/icons-react';
import { Box, ScrollArea, rem } from '@mantine/core';
import { MDX_PAGES_GROUPS } from '@/mdx';
import { NavbarMainLink } from './NavbarMainLink/NavbarMainLink';
import { NavbarLinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import classes from './Navbar.module.css';
import IconBrandBlipIframe from './IconBrandBlipIframe';

interface NavbarProps {
  navbarOpened: boolean;
  mobileNavbarOnly: boolean | undefined;
  onNavbarClose(): void;
}

export function Navbar({
  navbarOpened,
  onNavbarClose,
  mobileNavbarOnly,
}: NavbarProps) {
  const groups = MDX_PAGES_GROUPS.map((group) => (
    <NavbarLinksGroup
      data={group}
      onNavbarClose={onNavbarClose}
      key={group.group}
    />
  ));

  return (
    <Box
      component="nav"
      className={classes.navbar}
      mod={{ hidden: !navbarOpened, 'mobile-only': mobileNavbarOnly }}
    >
      <ScrollArea
        className={classes.scrollarea}
        type="never"
        offsetScrollbars={false}
      >
        <div className={classes.body}>
          <NavbarMainLink
            icon={
              <IconCompass
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            }
            href="/getting-started"
            onNavbarClose={onNavbarClose}
          >
            Getting started
          </NavbarMainLink>
          <NavbarMainLink
            icon={
              <IconBrandBlipIframe
                style={{ width: rem(25), height: rem(25) }}
                stroke={'1.5'}
              />
            }
            href="/about"
            onNavbarClose={onNavbarClose}
          >
            About Blip Iframe
          </NavbarMainLink>
          <NavbarMainLink
            icon={
              <IconApi
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            }
            href="/overview"
            onNavbarClose={onNavbarClose}
          >
            API Overview
          </NavbarMainLink>
          <NavbarMainLink
            icon={
              <IconHeartHandshake
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
              />
            }
            href="/contribute"
            onNavbarClose={onNavbarClose}
          >
            Contribute
          </NavbarMainLink>
          <div className={classes.groups}>{groups}</div>
        </div>
      </ScrollArea>
    </Box>
  );
}
