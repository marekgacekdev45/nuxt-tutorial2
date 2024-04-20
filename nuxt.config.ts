// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app:{
    head:{
      title:'byle co',
      meta:[
        {
          name: 'description', content:'everything asd'
        }
      ],
      link:[
        {
          rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  }
})