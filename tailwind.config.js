/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 魔幻配色，可替换
        'magic-dark': '#0a0a0f',
        'magic-deeper': '#050508',
        'magic-purple': '#7c3aed',
        'magic-purple-light': '#a78bfa',
        'magic-gold': '#f59e0b',
        'magic-gold-light': '#fcd34d',
        'magic-blue': '#1e1b4b',
        'magic-card': 'rgba(15, 10, 40, 0.85)',
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'glitch': 'glitch 3s infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.8), 0 0 60px rgba(245, 158, 11, 0.3)' },
        },
      },
      fontFamily: {
        magic: ['Georgia', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
