import React from 'react';
import Head from 'next/head';
import { DEFAULT_THEME } from '@mantine/core';
import nunitoSans from './nunito-sans';

export function FontsStyle() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{ --docs-font-primary: ${nunitoSans.style.fontFamily}, ${DEFAULT_THEME.fontFamily}; }`,
        }}
      />
    </Head>
  );
}
