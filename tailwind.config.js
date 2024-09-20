/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      inset: {
        'custom-1': '150px',
      },
      spacing: {
        'custom-left': '920px',
        'custom-left2': '60rem',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lobster: ['Lobster', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
