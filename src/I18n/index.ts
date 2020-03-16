import LocalizedStrings from 'react-localization'
import _en from './en'
import _cn from './cn'

const I18n = new LocalizedStrings({
  en: _en,
  cn: _cn,
})

const lang = localStorage.getItem('lang') || 'en'

if (lang) {
  I18n.setLanguage(lang)
}

export default I18n
