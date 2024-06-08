import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://ivanbong.vercel.app'
      : 'http://localhost:3000',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
