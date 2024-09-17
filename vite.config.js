import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['primereact/chart'],  // Hapus chart.js dari sini
  },
  build: {
    rollupOptions: {
      external: ['chart.js'],  // Pastikan Vite tidak memproses chart.js
    },
  },
});
