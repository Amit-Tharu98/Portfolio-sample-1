/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Just-In-Time mode ensures classes are not prematurely purged
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // All JS/TS files in the src folder
    './public/**/*.html',         // All HTML files in the public folder
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme if needed
  },
  plugins: [],
};
