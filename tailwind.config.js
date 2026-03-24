/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0b0f10',
          base: '#c9d1d9',
          cyan: '#00ffee',
          purple: '#b392f0',
          dim: '#21262d',
          dark: '#161b22',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace']
      }
    },
  },
  plugins: [],
};
