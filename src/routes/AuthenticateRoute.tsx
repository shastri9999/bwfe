import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

import { UserType } from '../types';
import { RouteRestrictions, loginPath, todosPath } from './paths';

interface IAuthenticateRouteProps extends RouteProps {
  readonly authenticatedUser: UserType | null;
  readonly component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

export default function AuthenticateRoute({
  component,
  authenticatedUser,
  path,
  ...rest
}: IAuthenticateRouteProps) {
  const Component = component;

  const render = (renderProps: RouteComponentProps<any>) => {
    const loggedIn = authenticatedUser !== null;
    let canAccess = loggedIn;
    let basePath = path;
    const basePathRegex = /^\/[^\/]+/;
    const basePathMatch = path.match(basePathRegex);
    if (basePathMatch) {
      basePath = basePathMatch[0];
    }

    let redirectPath = loginPath;

    if (RouteRestrictions[basePath]) {
      const canAccessRoute = RouteRestrictions[basePath].includes(
        authenticatedUser
      );
      if (loggedIn && !canAccessRoute) {
        redirectPath = todosPath;
      }
      canAccess = canAccess && canAccessRoute;
    }

    let element = (
      <Redirect
        to={{
          pathname: redirectPath,
          state: { from: renderProps.location },
        }}
      />
    );

    if (canAccess) {
      element = <Component {...renderProps} />;
    }

    return element;
  };

  return <Route {...rest} render={render} />;
}
