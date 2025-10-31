/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        docker: {
          bg: '#0f1419',
          canvas: '#1a1f29',
          primary: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          text: '#e5e7eb',
          muted: '#6b7280',
        }
      },
      animation: {
        'slide-in': 'slideIn 0.8s ease-out',
        'stack': 'stack 0.6s ease-in-out',
        'shimmer': 'shimmer 1s infinite',
        'fly': 'fly 1s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        stack: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fly: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(200px, -100px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}