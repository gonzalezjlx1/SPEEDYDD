import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'eRb1QF9KLXussksiPXlnEwtt',
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        header: 'storyblok/Header',
        section: 'storyblok/Section',
        sectionhowitworks: 'storyblok/Sectionhowitworks',
        navItem: 'storyblok/NavItem',
        buttonItem: 'storyblok/ButtonItem',
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
