import React from 'react';
import { rem } from '@mantine/core';

interface NpmIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function PnpmIcon({ size, style, ...others }: NpmIconProps) {
  return (
    <svg
      {...others}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
    >
      <path d="M253.982 80.7566H175.248V2.0177H253.982V80.7566Z" fill="#F9AD00" />
      <path d="M167.359 80.7566H88.625V2.0177H167.359V80.7566Z" fill="#F9AD00" />
      <path d="M80.7516 80.7566H2.01758V2.0177H80.7516V80.7566Z" fill="#F9AD00" />
      <path d="M253.982 167.369H175.248V88.6306H253.982V167.369Z" fill="#F9AD00" />
      <path d="M167.359 167.369H88.625V88.6306H167.359V167.369Z" fill="#4E4E4E" />
      <path d="M167.359 253.982H88.625V175.243H167.359V253.982Z" fill="#4E4E4E" />
      <path d="M253.982 253.982H175.248V175.243H253.982V253.982Z" fill="#4E4E4E" />
      <path d="M80.7516 253.982H2.01758V175.243H80.7516V253.982Z" fill="#4E4E4E" />
    </svg>
  );
}
