import type { Plugin } from '@nuxt/types'
import api from '@/apis/index'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
}

const apiPlugin: Plugin = (ctx, inject) => {
  // inject('truncate', truncater)
  // const request = api(ctx.$axios, ctx.store)
  inject('api', api(ctx.$axios, ctx.store))
}

export default apiPlugin

