import type { CenterFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const CenterStylesApi: StylesApiData<CenterFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--center-display': 'Controls `display` property of the root element',
    },
  },
};
