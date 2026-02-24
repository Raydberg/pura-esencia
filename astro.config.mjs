// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://www.pura-esencia.vercel.app',
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  adapter: vercel(),
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
});