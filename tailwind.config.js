const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        gray: colors.neutral,
        hotPink: '#FF1966',
        dark: '#222222',
        light: '#FAFAFA',
        violetDark: '#4c2889',
        cagette: '#ded1c1',
        second: '#704242'
      },

      backgroundImage: {
        'gradient-top-to-bottom':
          'linear-gradient(to bottom, var(--color-cagette), var(--color-light))'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        },
        'scroll-hint': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-20%)' },
          '75%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 10s linear infinite',
        blink: 'blink .9s both infinite',
        'scroll-hint': 'scroll-hint 1.4s ease-in-out'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
