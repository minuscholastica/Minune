module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#00147e', // Adjust this to match your preferred dark navy color
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
