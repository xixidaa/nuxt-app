// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '海致科技集团|领先的认知智能技术供应商',
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },
  pages: true,
  css: ['assets/css/global.less'],
  components: true
})
