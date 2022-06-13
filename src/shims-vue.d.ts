import Vue, { ComponentOptions } from 'vue';
import VueRouter, { Route } from "vue-router";
declare module '*.vue' {
  const component: ComponentOptions;
  export default component
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 表示this有這些東西
    $route: Route;
    $http: any;
    $Modal: any;
    $msg: any;
  }
  
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vcoIntercrpt?: boolean
  }
}
