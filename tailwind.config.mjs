/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        neo: {
          bg: '#FFFDF5',
          accent: '#FF5E5B',
          secondary: '#FFD166',
          muted: '#C4B5FD',
          surface: '#FFFFFF',
          dark: '#111827',
          mint: '#6EE7B7',
        },
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000',
        'neo': '4px 4px 0px 0px #000',
        'neo-md': '4px 4px 0px 0px #000',
        'neo-lg': '6px 6px 0px 0px #000',
        'neo-white': '4px 4px 0px 0px #FFFDF5',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee 24s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
