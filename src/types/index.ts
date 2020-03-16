import { DefaultTheme } from 'styled-components'

export interface IThemeContainer {
  [key: string]: DefaultTheme
}

export interface IAttribute {
  theme: string
  toggleTheme: () => void
  componentMounted: boolean
}

export interface ILang {
  lang: string
  toggleUpdateLanguage: () => void
}
