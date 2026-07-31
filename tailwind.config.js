export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush: {
          50: '#fffafa',
          100: '#fdf2f2',
          200: '#fbe4e6',
          300: '#f7cdd3',
          400: '#f0aab5',
          500: '#e57e92',
          600: '#d8506f',
          700: '#c33057',
          800: '#a32347',
        },
        cream: '#fffaf6',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(196, 74, 106, 0.25)',
        card: '0 14px 40px -18px rgba(196, 74, 106, 0.35)',
      },
    },
  },
}
