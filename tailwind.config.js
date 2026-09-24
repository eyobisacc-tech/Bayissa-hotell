/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f5eede',
          300: '#ede0c4',
          400: '#e0cca8',
          500: '#d4b88c',
        },
        beige: {
          50: '#faf8f5',
          100: '#f3eee6',
          200: '#e8dfd0',
          300: '#d9c9b3',
          400: '#c5b094',
          500: '#b0997a',
          600: '#96805f',
          700: '#7a6850',
          800: '#5f5240',
          900: '#473d31',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5edd5',
          200: '#ebd9a8',
          300: '#e0c478',
          400: '#d4af37',
          500: '#c49b2a',
          600: '#a87d20',
          700: '#87621a',
          800: '#6b4e18',
          900: '#4d3a14',
        },
        brown: {
          50: '#faf7f4',
          100: '#f0e8e0',
          200: '#e0cfc0',
          300: '#c9ad94',
          400: '#b08e6e',
          500: '#9a7450',
          600: '#7d5d3e',
          700: '#634830',
          800: '#4a3624',
          900: '#322a1e',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
