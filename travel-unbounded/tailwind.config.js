/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        realFlight: {
          '0%':   { transform: 'translateX(-20vw)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { transform: 'translateX(120vw)', opacity: '0' },
        },
      },
      animation: {
        'flight-real': 'realFlight 20s linear infinite',
      },
    },
  },
  plugins: [],
};