import { FOCUS_CLASS_NAMES } from '@mantine/core';
import { MantineLogoProps } from '@mantine/ds';
import cx from 'clsx';
import Link from 'next/link';
import BlipIframeLogo from './BlipIframeLogo';
import classes from './Logo.module.css';

export function Logo(props: MantineLogoProps) {
  return (
    <Link
      href="/getting-started"
      className={cx(classes.logo, FOCUS_CLASS_NAMES.auto)}
    >
      <BlipIframeLogo height={30} width={135.697546} {...props} />
    </Link>
  );
}
