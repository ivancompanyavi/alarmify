import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        background_color: '#0E8388',
        theme_color: '#0E8388',
        icons: [
          {
            src: '/assets/logo.png',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
          {
            src: '/assets/logo-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
        ],
      },
    }),
  ],
})
