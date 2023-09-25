/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
<<<<<<< HEAD
        xs: '475px',
        sm: "500px",
        md: "769px",
        lg: "1025px",
        "xl-lg": "1100px",
        xl: "1350px",
        "2xl": "1535px",
      },
=======
        xs: '500px',
        sm: '639px',
        md: '769px',
        lg: '1025px',
        'xl-lg': '1100px',
        xl: '1350px',
        '2xl': '1535px'
      }
>>>>>>> ee88379256d7388d6c8a997b1364347687b09412
    },
    extend: {
      colors: {
        main: '#003060',
        sub: '#68BBE3',
        text: '#FFFFFF',
        subsec: '#D3D3D3',
        lightsec: '#e8e4e3'
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
  plugins: [require('tailwindcss-animate')]
};