/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./services.html",
    "./about.html",
    "./contact.html",
    "./blog.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        white: 'var(--white)',
        'light-bg': 'var(--light-bg)',
        'text-color': 'var(--text-color)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
