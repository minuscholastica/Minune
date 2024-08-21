import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1e3a8a',
      },
      backgroundColor: {
        light: '#ffffff',
        dark: '#1a202c',
      },
      textColor: {
        light: '#1a202c',
        dark: '#ffffff',
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('textColor.light'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('textColor.dark'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            h1: { color: theme('textColor.dark') },
            h2: { color: theme('textColor.dark') },
            h3: { color: theme('textColor.dark') },
            h4: { color: theme('textColor.dark') },
            strong: { color: theme('textColor.dark') },
            code: { color: theme('textColor.dark') },
            figcaption: { color: theme('textColor.dark') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
}

export default config
