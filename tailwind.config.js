/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './@/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '500px',
        sm: '639px',
        md: '769px',
        lg: '1025px',
        'xl-lg': '1100px',
        xl: '1350px',
        '2xl': '1535px'
      }
    }, 
    backgroundImage: {
      'home-banner': "url('/public/home-banner.jpg')",
    },
    extend: {
      colors: {
        main: "#031335",
        sub: "#FFAE50",
        subsec: '#F5F5F5', //edited by rizwan
        // subsec: '#D8D8D8',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
  require('@tailwindcss/aspect-ratio')]
};
