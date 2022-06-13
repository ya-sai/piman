import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/style.scss';
import bpa from "@/components/index";

Vue.config.productionTip = false


Vue.use(bpa)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
