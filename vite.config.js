import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons/fa', 'react-icons/si', 'react-icons/fi', 'react-icons/bs']
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
