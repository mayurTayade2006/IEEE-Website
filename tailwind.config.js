/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieee: {
          blue: '#00629B',
          darkBlue: '#004B87',
          lightBlue: '#0085CA',
          accent: '#00B5E2',
        },
        dark: {
          bg: '#0A0E17',
          card: '#121826',
          border: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
