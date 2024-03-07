import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx}',
  ],

  theme: {
    extend: {
      colors: {
        grey1: '#FAFAFA',
        grey2: '#F5F8F9',
        grey3: '#ECF2F4',
        grey4: '#CCDBE0',
        dark1: '#070F2B',
        dark2: '#1B1A55',
        dark3: '#535C91',
        dark4: '#9290C3',
        error: '#fc8181',
        red: '#ff0000',
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      gridTemplateRows: {
        list: '180px 100px minmax(200px, 1fr) 120px',
      },
      fontFamily: {
        rubik: ['var(--font-rubik)', ...fontFamily.sans],
      },
      fontSize: {
        '4xl': [
          '2rem',
          { lineHeight: '2.8rem', letterSpacing: '-0.01em', fontWeight: '400' },
        ],
      },
      letterSpacing: {
        tagline: '.15em',
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem',
      },
      opacity: {
        15: '.15',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'linear',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      borderWidth: {
        DEFAULT: '0.0625rem',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-gradient':
          'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
        'benefit-card-1': 'url(assets/benefits/card-1.svg)',
        'benefit-card-2': 'url(assets/benefits/card-2.svg)',
        'benefit-card-3': 'url(assets/benefits/card-3.svg)',
        'benefit-card-4': 'url(assets/benefits/card-4.svg)',
        'benefit-card-5': 'url(assets/benefits/card-5.svg)',
        'benefit-card-6': 'url(assets/benefits/card-6.svg)',
      },

      lineHeight: {
        12: '1.2',
        13: '1.3',
        16: '1.6',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addBase, addComponents, addVariant }) {
      addBase({});
      addUtilities(
        {
          '.tap-highlight-color': {
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
          },
          '.scrollbar-thin': {
            scrollbarWidth: 'thin',
            scrollbarColor: '#212529 #dee2e6',
          },
          '.scrollbar-webkit': {
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'white',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgb(31 41 55)',
              borderRadius: '20px',
              border: '1px solid white',
            },
          },
        },
        ['responsive', 'hover']
      );
      addComponents({
        '.container': {
          '@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]':
            {},
        },
        '.button': {
          '@apply font-rubik text-xs font-bold uppercase tracking-wider': {},
        },
      });
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }),
  ],
};
