import type { App, Component, ComputedOptions, MethodOptions } from "vue";
import * as components from ".";
import '@/assets/main.scss'

const componentList: {[key: string]: Component<any, any, any, ComputedOptions, MethodOptions>} = components.default
const PimanComponents = {
  install(Vue: App){
    Object.keys(componentList).forEach((name) =>{
      Vue.component(name, componentList[name])
    })
  }
}

export default PimanComponents;
export * from ".";