/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.pug",
  "./catalog.pug",
  "./src/**/**/*.{js,pug,html}",
  "./public/**/*.js",
  "nouislider/dist/nouislider.css"
  ],
  theme: {
    extend: {
      colors: {
        "saldo": "#3E5DA7",
        "saldo-white": "#F2F3F5",
        "saldo-50": "#F8F8F8",
        "saldo-300": "#9EAED3",
        "saldo-100": "#E6EDFF",
        "saldo-600": "#1D2848",
      },
      screens: {
        'vsm': '375px',
        '1xl': '1441px',
      }
    },
  },
  plugins: [],
}

