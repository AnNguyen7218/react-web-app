import { useEffect, useState } from 'react'
import { ILang } from '../types'
import I18n from '../I18n'

//TODO: Temporary add language selector
export const useLanguage = (): ILang => {
  const [lang, setLang] = useState('en')

  const saveLangToLocalStorage = (lang: string): void => {
    window.localStorage.setItem('lang', lang)
  }

  const toggleUpdateLanguage = (): void => {
    if (lang === 'en') {
      setLang('cn')
      saveLangToLocalStorage('cn')
      I18n.setLanguage('cn')
    } else {
      setLang('en')
      saveLangToLocalStorage('en')
      I18n.setLanguage('en')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('lang')
    if (localTheme) {
      setLang(localTheme)
      I18n.setLanguage(localTheme)
    } else {
      setLang('en')
      saveLangToLocalStorage('en')
      I18n.setLanguage('en')
    }
  }, [])

  return { lang, toggleUpdateLanguage }
}
