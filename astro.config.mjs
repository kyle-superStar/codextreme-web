import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'jp'],
    routing:{
      prefixDefaultLocale: false,
    }
  },

  output: 'static',
  integrations: [tailwind(), react()],
});
