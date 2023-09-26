import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

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
      },
    },
  },
  plugins: [require('tailwind-blip-ds')],
} satisfies Config;
