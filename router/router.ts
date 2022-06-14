import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: index
      }
    ]
  })
}