module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#002147', // Adjust this to match your preferred dark navy color
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
