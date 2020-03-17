import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { themeContainer } from './theme/theme'
import { GlobalStyles } from './global'

import Toggle from './components/Common/Toggle'
import LoadingComponent from './components/Common/Loading'
import ProtectedRoute from './components/Common/ProtectedRoute'

import { useDarkMode } from './customHookFunctions/useDarkMode'
import { useLanguage } from './customHookFunctions/useLanguage'
import I18n from './I18n/index'

import logo from './logo.svg'
import './App.css'

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>
const Login = () => <h3>Login</h3>

const fakeAuth = { isSignedIn: true }

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
        <LoadingComponent />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <ProtectedRoute
              path="/protected"
              component={Protected}
              isSignedIn={fakeAuth.isSignedIn}
            />
          </div>
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
