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
        barlow: ['Barlow', 'sans-serif'],
        lily: ['Lily Script One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        gupter: ['Gupter', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        playball: ['Playball', 'cursive'],
        sofia: ['Sofia', 'cursive'],
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-medium': '1px 1px 4px rgba(0, 0, 0, 0.3)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.2)',
        'custom-deep': '0 20px 25px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

