import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://ivanbong.vercel.app',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: false,
  }),
})
