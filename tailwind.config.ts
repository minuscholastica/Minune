import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'dark-navy': '#002147',
      },
      backgroundColor: {
        light: '#ffffff',
        dark: '#1a202c',
      },
      textColor: {
        light: '#1a202c',
        dark: '#ffffff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
