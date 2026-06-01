/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-animate-css/dist/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('tw-animate-css')],
}
