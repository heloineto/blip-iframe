/* eslint-disable import/no-relative-packages */
import React from 'react';
import cx from 'clsx';
import { IconChevronDown, IconExternalLink } from '@tabler/icons-react';
import {
  Code,
  Group,
  Burger,
  RemoveScroll,
  Menu,
  UnstyledButton,
  Text,
  Box,
} from '@mantine/core';
import {
  HeaderControls,
  ColorSchemeControl,
  SearchMobileControl,
} from '@mantine/ds';
import { Logo } from '@/components/Logo';
import { searchHandlers } from '@/components/Search';
import classes from './Header.module.css';
import githubLink from '@/lib/constants/github-link';

const packageJson = {
  name: 'mantine',
  private: true,
  workspaces: ['src/*'],
  version: '7.0.0-beta.5',
  description: 'Mantine Components Monorepo',
  main: 'index.js',
  repository: 'https://github.com/mantinedev/mantine.git',
  author: 'Vitaly Rtishchev <rtivital@gmail.com>',
  license: 'MIT',
  resolutions: {
    '@types/react': '18.2.17',
  },
};

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle(): void;
}

const versions = [{ v: 'v1', name: '0.0.1', link: 'https://v1.mantine.dev/' }];

export function Header({ navbarOpened, onNavbarToggle }: HeaderProps) {
  const versionItems = versions.map((item) => (
    <Menu.Item
      key={item.name}
      component="a"
      href={item.link}
      target="_blank"
      rightSection={
        <IconExternalLink
          className={classes.versionExternalIcon}
          stroke={1.5}
        />
      }
    >
      <b>{item.v}</b>{' '}
      <Text span c="dimmed" fz="xs">
        ({item.name})
      </Text>
    </Menu.Item>
  ));

  return (
    <>
      <header
        className={cx(classes.header, RemoveScroll.classNames.fullWidth)}
        data-desktop
      >
        <div className={classes.logo}>
          <Logo />
          <Menu width={180}>
            <Menu.Target>
              <UnstyledButton>
                <Code fw="bold" className={classes.version}>
                  <span>{packageJson.version}</span>
                  <IconChevronDown
                    className={classes.versionChevron}
                    stroke={1.5}
                  />
                </Code>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>{versionItems}</Menu.Dropdown>
          </Menu>
        </div>

        <HeaderControls
          className={classes.controls}
          onSearch={searchHandlers.open}
          githubLink={githubLink}
        />
      </header>

      <header
        className={cx(classes.header, RemoveScroll.classNames.fullWidth)}
        data-mobile
      >
        <Group justify="space-between" w="100%">
          <Box miw={80}>
            <Burger
              opened={navbarOpened}
              onClick={onNavbarToggle}
              size="sm"
              aria-label="Toggle navbar"
            />
          </Box>

          <Logo />

          <Group gap="sm">
            <SearchMobileControl onSearch={searchHandlers.open} />
            <ColorSchemeControl />
          </Group>
        </Group>
      </header>
    </>
  );
}
