import { DEFAULT_THEME, createTheme } from '@mantine/core';
import nunitoSans from './fonts/nunito-sans';

export const theme = createTheme({
  fontFamily: `${nunitoSans.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `Nunito Sans, Monaco, ${DEFAULT_THEME.fontFamilyMonospace}`,
  colors: {
    cyan: [
      '#e0ffff',
      '#ccfcff',
      '#9cf7ff',
      '#68f3fe',
      '#44eefe',
      '#30ecfe',
      '#1eecfe',
      '#00d1e3',
      '#00bbca',
      '#00a2b1',
    ],
    'ocean-blue': [
      '#7AD1DD',
      '#5FCCDB',
      '#44CADC',
      '#2AC9DE',
      '#1AC2D9',
      '#11B7CD',
      '#09ADC3',
      '#0E99AC',
      '#128797',
      '#147885',
    ],
    'bright-pink': [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
  primaryColor: 'cyan',
});
