import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { loginPath, editPath, createPath, todosPath } from './paths';
import LoginPage from '../components/LoginPage';
import TodosPage from '../components/TodosPage';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import ErrorPage from '../components/ErrorPage';

const Routes = () => {
  return (
    <Switch>
      <Route path={loginPath} component={LoginPage} />
      <Route path={todosPath} component={TodosPage} />
      <Route path={createPath} component={CreatePage} />
      <Route path={editPath} component={EditPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
