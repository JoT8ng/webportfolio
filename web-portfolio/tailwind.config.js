/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'orange': '#FF9866',
      'orange-light': '#FF9966',
      'salmon': {
        100: '#EF5456',
        200: '#FF6063',
        300: '#F05355',
        400: '#F05255',
        500: '#3E2215',
        600: '#F05254',
        700: '#C94E51',
      },
      'salmon-dark': '#F05355',
      'green-dark': '#1D2603',
      'green': '#E1ECC2',
      'green-light': '#E1EBC1',
      'gray-dark': '#151515',
      'gray-light': '#F2F2F2',
      'gray': {
        100: '#ADADAD',
        200: '#6F6F6F',
        300: '#595959',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Roboto'],
      'mono': ['ui-monospace', 'Consolas'],
      'roboto-bold': ['Roboto', 'sans-serif', 'black'],
    },
    fontWeight: {
      normal: '500',
      bold: '700',
      black: '900',
    },
    extend: {
      backgroundColor: {
        'default': 'rgb(225,236,194)',
      },
    },
  },
  plugins: [],
}
