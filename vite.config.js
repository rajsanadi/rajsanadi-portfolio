import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rajsanadi-portfolio/',
  plugins: [react({ fastRefresh: true })], // Ensures React Fast Refresh is enabled
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // Ensure this matches your desired port
    strictPort: true, // Prevent Vite from switching ports automatically
    hmr: {
      port: 5000, // Explicitly set a port for HMR
    },
    watch: {
      usePolling: true, // Use polling as a fallback for file change detection
    },
  },
})
