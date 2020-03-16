import { useEffect, useState } from 'react'

import { IAttribute } from '../types'

export const useDarkMode = (): IAttribute => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)

  const saveThemeToLocalStorage = (theme: string): void => {
    window.localStorage.setItem('theme', theme)
  }

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark')
      saveThemeToLocalStorage('dark')
    } else {
      setTheme('light')
      saveThemeToLocalStorage('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme('light')
      saveThemeToLocalStorage('light')
    }
    setComponentMounted(true)
  }, [])

  return { theme, toggleTheme, componentMounted }
}
