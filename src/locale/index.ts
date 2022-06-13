import Vue from "vue";
import { ComponentOptions } from "vue/types/umd";
import languages from "./lang";
import { Translation } from "./types"

const i18n = new Vue({
  data(){
    return {
      translation: languages["zh-Hant-TW"]
    }
  },
  methods:{
    t(path: string){
      let value: string|number|Translation  = ''
      const array = path.split('.')
      let currentLang: string|number|Translation = this.translation
    
      for (let i = 0, l = array.length; i < l; i++) {
        const key = array[i];
        value = currentLang[key] as Translation
        
        if(i === l-1) return value
        if(!value) return ''
        currentLang = value
      }
    },
    use(l: 'en' | 'zh-Hant-TW' | Translation){
      if(typeof l === 'string'){
        const translation = languages[l]
        if(!translation) return console.error(`[BpaI18n Error]: The locale "${l}" is not supported`);
        this.translation = translation
      }else{
        this.translation = l ? { ...this.translation, ...l } : this.translation
      }    
    }
  }
})
/**
* 切換語系，目前支援英文`en`及繁體中文`zh-Hant-TW`，也可直接傳入 JSON
* @param l 語言代碼或翻譯 JSON
*/
export const use = (l: 'en' | 'zh-Hant-TW' | Translation): void => {
  i18n.use(l)
}

const BpaI18n: ComponentOptions<Vue> = {
  methods:{
    /**
    * 在 vue 元件內進行翻譯，請使用於<template>或methods中，例如
    * @param path 翻譯JSON的路徑
    * @param opt 帶參數翻譯，但尚未實作
    * @returns string 翻譯結果
    */
    t: (path: string) => {
      return i18n.t(path)
    },
  },
}
export default BpaI18n