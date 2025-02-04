import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';  // Cambiar a este adaptador si usas Netlify


export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing:{
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  },

  output: 'server',
  integrations: [tailwind()],
  adapter: netlify(),
});
