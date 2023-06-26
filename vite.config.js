import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    svgrPlugin(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,json,woff,woff2}']
      },
      manifest: {
        "id": "com.geeekyboy.quinemccluskey",
        "short_name": "Quine McCluskey Solver",
        "name": "Quine McCluskey Solver",
        "description": "A Quine McCluskey solver for minimization of boolean functions",
        "icons": [{
          "src": "./android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        }, {
          "src": "./android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }],
        "start_url": "./index.html",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#051f21"
      },
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "fonts";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});