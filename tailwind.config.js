/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm' : {'min' : '200px', 'max' : '639px'},
      'md' : {'min' : '640px'}
    },
    extend: {
      fontFamily: {
        cambo: ['Cambo', 'serif'],
        lily: ['Lily Script One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        gupter: ['Gupter', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        playball: ['Playball', 'cursive'],
        sofia: ['Sofia', 'cursive'],
      },
    },
  },
  plugins: [],
}

