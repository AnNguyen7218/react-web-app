import React from 'react'
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Toggle from './components/Common/Toggle'
import {useDarkMode} from './utils/useDarkMode'

import logo from './logo.svg'
import './App.css'


const App: React.FC<{}> = () => {
  const {theme, toggleTheme, componentMounted} = useDarkMode()
	
	if (!componentMounted) {
    return <div />
	}
	
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <>
        <GlobalStyles />
        <Toggle toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </>
    </ThemeProvider>
  )
}

export default App
