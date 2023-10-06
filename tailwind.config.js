/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}

