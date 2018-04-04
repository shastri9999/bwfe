import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import ErrorPage from '../components/ErrorPage';
import LoginPage from '../components/LoginPage';
import TodosPage from '../components/TodosPage';
import { UserType } from '../types';
import AuthenticateRoute from './AuthenticateRoute';
import { createPath, editPath, loginPath, todosPath } from './paths';
import RedirectIfAuthenticated from './RedirectIfAuthenticated';

interface IRouteProps {
  authenticatedUser: UserType;
}

const Routes: React.SFC<IRouteProps> = ({ authenticatedUser }) => {
  return (
    <Switch>
      <RedirectIfAuthenticated
        exact={true}
        path={loginPath}
        component={LoginPage}
        redirectPath={todosPath}
        authenticatedUser={authenticatedUser}
      />
      <AuthenticateRoute
        path={todosPath}
        component={TodosPage}
        authenticatedUser={authenticatedUser}
      />
      <AuthenticateRoute
        path={createPath}
        component={CreatePage}
        authenticatedUser={authenticatedUser}
      />
      <AuthenticateRoute
        path={editPath}
        component={EditPage}
        authenticatedUser={authenticatedUser}
      />
      <Redirect from="/" to={todosPath} exact={true} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
