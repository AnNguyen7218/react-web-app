import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any
  isSignedIn: boolean
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isSignedIn, ...rest } = props

  return (
    <Route
      {...rest}
      render={routeProps =>
        isSignedIn ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
