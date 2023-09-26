import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          0: '#E7F5FF',
          1: '#D0EBFF',
          2: '#A5D8FF',
          3: '#74C0FC',
          4: '#4DABF7',
          5: '#339AF0',
          6: '#228BE6',
          7: '#1C7ED6',
          8: '#1971C2',
          9: '#1864AB',
        },
        gray: {
          0: '#F8F9FA',
          1: '#F1F3F5',
          2: '#E9ECEF',
          3: '#DEE2E6',
          4: '#CED4DA',
          5: '#ADB5BD',
          6: '#868E96',
          7: '#495057',
          8: '#343A40',
          9: '#212529',
        },
        dark: {
          0: '#C1C2C5',
          1: '#A6A7AB',
          2: '#909296',
          3: '#5C5F66',
          4: '#373A40',
          5: '#2C2E33',
          6: '#25262B',
          7: '#1A1B1E',
          8: '#141517',
          9: '#101113',
        },
      },
    },
  },
  plugins: [require('tailwind-blip-ds')],
} satisfies Config;
