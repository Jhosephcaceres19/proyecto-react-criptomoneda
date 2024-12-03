import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "theme_color":"#8936FF",
    "background_color":"#2EC6FE",
    "icons":[
        {"purpose":"maskable",
        "sizes":"512x512",
        "src":"/icon512_maskable.png",
        "type":"image/png"
        },
        {"purpose":"any",
        "sizes":"512x512",
        "src":"/icon512_rounded.png",
        "type":"image/png"
    }],
    "orientation":"any",
    "display":"standalone",
    "dir":"auto",
    "lang":"es-US",
    "name":"criptoDivisas",
    "short_name":"Divcripto"
      },
      devOptions: {
        enabled: true, // Habilitar PWA en desarrollo para pruebas
      },
      includeAssets: ['manifest.json', 'icon512_maskable.png', 'icon512_rounded.png'],
    }),
  ],
})
