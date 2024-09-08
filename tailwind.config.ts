import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#6C5AE0',
          500: '#4839A3',
          800: '#D8D9FD',
          900: '#100C27'
        },
        highlight: {
          400: '#F4CA6D',
          500: '#F2BF4E'
        },
        gray: {
          100: '#F1F3F5',
          300: '#CFD3D8',
          600: '#97A1AC',
          700: '#7E8A98',
          800: '#636E7C',
          900: '#212429'
        },
        white: '#ffffff',
      },
      fontFamily: {
        NunitoSans: ['Nunito Sans', 'sans-serif'],
        DarkerGrotesque: ['Darker Grotesque', 'sans-serif'],
        RedHatDisplay: ['Red Hat Display', 'sans-serif'],
      },
      // xxs fonts are not in the design style guide, but are used on screens design... Is better recalculate them
      fontSize: {
        'heading-lg': ['56px', { lineHeight: '100%' }],
        'heading-md': ['40px', { lineHeight: '100%' }],
        'heading-sm': ['32px', { lineHeight: '110%' }],
        'heading-xs': ['24px', { lineHeight: '110%' }],
        'heading-xxs': ['16px', { lineHeight: '120%' }],

        'subtitle-sm': ['20px', { lineHeight: '140%' }],
        'subtitle-xs': ['14px', { lineHeight: '120%' }],
        'subtitle-xxs': ['16px', { lineHeight: '120%' }],

        'body-lg': ['20px', { lineHeight: '150%' }],
        'body-md': ['16px', { lineHeight: '150%' }],
        'body-sm': ['14px', { lineHeight: '150%' }],

        'caption': ['12px', { lineHeight: '150%' }],
        'caption-xs': ['9px', { lineHeight: '150%' }],
      },
      boxShadow: {
        'button-black': '0px 4px #000000',
        'button-disabled': '0px 4px #97A1AC',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.input-default': {
          '@apply px-3 py-2 border bg-white focus:outline-none focus:ring focus:ring-primary-400 transition-shadow duration-300 text-gray-700 placeholder-gray-700': {},
        },
        '.errror-message': {
          '@apply text-gray-300 text-sm': {},
        }
      })
    },
  ],
}
export default config
