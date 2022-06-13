export interface Translation {
  [key: string]: Translation|string|number
}

export type Locale = 'en' | 'zh-Hant-TW' | Translation

export interface BpaI18n {
  use(l: Locale)
}