import React from 'react'
import { ThemeProvider } from 'styled-components'

import { themeContainer } from './theme/theme'
import { GlobalStyles } from './global'

import Toggle from './components/Common/Toggle'
import { useDarkMode } from './customHookFunctions/useDarkMode'
import { useLanguage } from './customHookFunctions/useLanguage'
import I18n from './I18n/index'

import logo from './logo.svg'
import './App.css'

const App: React.FC<{}> = () => {
  const { theme, toggleTheme, componentMounted } = useDarkMode()
  const { lang, toggleUpdateLanguage } = useLanguage()

  const themeMode = themeContainer[theme]

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle toggleAction={toggleTheme} toggleText={'Toggle Theme'} />
        <Toggle
          toggleAction={toggleUpdateLanguage}
          toggleText={'Toggle Language ' + lang}
        />
        <h1>It is a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <h1>{I18n.logIn}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </>
    </ThemeProvider>
  )
}

export default App
