import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://falorant.live',
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'jp', 'hi', 'tr'],
    routing:{
      prefixDefaultLocale: false,
    }
  },

  output: 'static',
  integrations: [tailwind(), react()],
  sitemap: true,
});
