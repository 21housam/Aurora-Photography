/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern dark theme with gold accents
        background: '#0a0a0a',
        surface: '#1c1c1c',
        'surface-hover': '#252525',
        text: '#ffffff',
        'text-secondary': '#b0b0b0',
        muted: '#6b7280',
        accent: '#d4a373',
        'accent-hover': '#c4935f',
        'accent-light': '#e5b584',
        border: 'rgba(212, 163, 115, 0.2)',
        'border-dark': '#2a2a2a',
      },
      fontFamily: {
        // Modern font stack
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
        md: '0 4px 16px rgba(0, 0, 0, 0.4)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
        xl: '0 20px 40px rgba(0, 0, 0, 0.6)',
        'glow': '0 0 40px rgba(212, 163, 115, 0.3)',
        'glow-lg': '0 0 60px rgba(212, 163, 115, 0.4)',
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease',
        'slide-up': 'slideUp 0.6s ease',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
