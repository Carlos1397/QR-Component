/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)', 
        LightGray: 'hsl(212, 45%, 89%)',
        GrayishBlue: ' hsl(220, 15%, 55%)',
        DarkBlue: 'hsl(218, 44%, 22%)'
      },
      screens: {
        'xs':  {'max': '768px' }  
      },
    },
  },
  plugins: [],
}