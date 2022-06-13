import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/button',
    name: 'Button',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue')
  },
  { path: '/select', name: 'Select', component: () => import('../views/Select.vue') },
  { path: '/input', name: 'Input', component: () => import('../views/Input.vue') },
  { path: '/radio', name: 'Radio', component: () => import('../views/Radio.vue') },
  { path: '/checkbox', name: 'Checkbox', component: () => import('../views/Checkbox.vue') },
  { path: '/formvalidate', name: 'FormValidate', component: () => import('../views/FormValidate.vue') },
  { path: '/breadcrumb', name: 'Breadcrumb', component: () => import('../views/Breadcrumb.vue') },
  { path: '/accordion', name: 'Accordion', component: () => import('../views/Accordion.vue') },
  { path: '/switch', name: 'Switch', component: () => import('../views/Switch.vue') },
  { path: '/card', name: 'Card', component: () => import('../views/Card.vue') },
  { path: '/dialog', name: 'Dialog', component: () => import('../views/Dialog.vue') },
  { path: '/pagination', name: 'Pagination', component: () => import('../views/Pagination.vue') },
  { path: '/dropdown', name: 'Dropdown', component: () => import('../views/Dropdown.vue') },
  { path: '/popover', name: 'Popover', component: () => import('../views/Popover.vue') },
  { path: '/msg', name: 'Msg', component: () => import('../views/Msg.vue') },
  { path: '/tabs', name: 'Tabs', component: () => import('../views/Tabs.vue') },
  { path: '/tree', name: 'Tree', component: () => import('../views/Tree.vue') },
  { path: '/tooltip', name: 'Tooltip', component: () => import('../views/Tooltip.vue') }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
