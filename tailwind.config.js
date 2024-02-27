/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['GFS Didot', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        red:
          {
            '50': '#fef2f2',
            '100': '#fde3e3',
            '200': '#fdcbcb',
            '300': '#faa7a7',
            '400': '#f57474',
            '500': '#ec4747',
            '600': '#d82a2a',
            '700': '#b61f1f',
            '800': '#971d1d',
            '900': '#611818',
            '950': '#440b0b',
        }
      }
    },
  },
  plugins: [],
}
