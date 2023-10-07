/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: '0 0 6em hsla(56, 93%, 52%, 0.904)'
      }
    }
  },
  plugins: []
}
