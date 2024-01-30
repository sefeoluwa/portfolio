/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",

      },
      fontFamily: {
        'lovers': ['Lovers Quarrel', 'cursive'],
        'saint': ['Mrs Saint Delafield', 'cursive'],
      },
      screens: {
        xs: "450px",
        sm: '640px',
        md: "710px",
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
    },
  },
  plugins: [],
}

