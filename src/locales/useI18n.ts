import { ref } from "vue";
import languages from "./lang";

export default function (){
  let translation = ref<any>(languages["zh-Hant-TW"])

  const t = (path: string) => {
    let value: string  = ''
    const array = path.split('.')
    let currentLang: any = translation.value
  
    for (let i = 0, l = array.length; i < l; i++) {
      const key = array[i];
      value = currentLang[key]
      
      if(i === l-1) return value
      if(!value) return ''
      currentLang = value
    }
  }
  const use = (l: 'en' | 'zh-Hant-TW' | Partial<typeof languages["zh-Hant-TW"]>) => {
    if(!l) return
    if(typeof l === 'string'){
      const target = languages[l]
      if(!target) return console.error(`[BpaI18n Error]: The locale "${l}" is not supported.`);
      translation.value = target
    }else{
      translation = l ? { ...translation, ...l } : translation
      for(const key in l){
        if(!translation.value[key]) translation.value[key] = {}
        translation.value[key] = {...l[(key as keyof typeof languages["zh-Hant-TW"])], ...translation.value[key]}
      }
    }    
  }

  return { t, use }
}