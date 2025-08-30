// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-purple': '#7C3AED',
        'brand-pink': '#EC4899',
        'brand-blue': '#3B82F6',
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
        'dark-border': '#334155',
      },
      boxShadow: {
        'glow-purple': '0 0 15px 0 rgba(124, 58, 237, 0.6)',
        'glow-blue': '0 0 15px 0 rgba(59, 130, 246, 0.6)',
      },
      animation: {
        'gradient-pulse': 'gradient-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-pulse': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    }
  },
  plugins: [],
};
