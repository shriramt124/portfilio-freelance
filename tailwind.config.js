/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.2)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};