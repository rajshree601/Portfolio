/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          primary: '#0078D4',
          secondary: '#50E6FF',
          accent: '#0EA5E9',
          text: '#1E293B',
          surface: '#FFFFFF',
          background: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        azure: '0 24px 80px rgba(15, 23, 42, 0.10)',
        glow: '0 20px 60px rgba(0, 120, 212, 0.18)'
      },
      backgroundImage: {
        'azure-grid': 'linear-gradient(rgba(0,120,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,120,212,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
