import React from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { VisuallyHidden, FOCUS_CLASS_NAMES } from '@mantine/core';
import { MantineLogo, MantineLogoProps } from '@mantine/ds';
import classes from './Logo.module.css';
import BlipIframeLogo from './BlipIframeLogo';

export function Logo(props: MantineLogoProps) {
  return (
    <Link
      href="/"
      className={cx(classes.logo, FOCUS_CLASS_NAMES.auto)}
      aria-label="Mantine"
    >
      <VisuallyHidden>
        Welcome to Mantine, React components library that you always wished for
      </VisuallyHidden>
      <BlipIframeLogo height={30} width={135.697546} {...props} />
    </Link>
  );
}
