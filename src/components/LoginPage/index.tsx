import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { signIn as signInAction } from '../../actions';
import { ISignInAction } from '../../actions/ActionTypes';
import { todosPath } from '../../routes/paths';
import { IStoreState, UserType } from '../../types';
import Button from '../Button';

export interface ILoginPageProps extends RouteComponentProps<any> {
  signIn: (role: UserType) => ISignInAction;
}

class LoginPage extends React.Component<ILoginPageProps> {
  public render() {
    return (
      <div className="login">
        <p>Please login to access list</p>
        <Button onClick={this.onEmployeeLogin}>{`Login as ${
          UserType.Employee
        }`}</Button>
        <Button onClick={this.onManagerLogin}>{`Login as ${
          UserType.Manager
        }`}</Button>
      </div>
    );
  }

  private onLogin = (role: UserType) => {
    this.props.history.push(todosPath);
    this.props.signIn(role);
  };

  private onManagerLogin = () => {
    this.onLogin(UserType.Manager);
  };

  private onEmployeeLogin = () => {
    this.onLogin(UserType.Employee);
  };
}

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  signIn: bindActionCreators(signInAction, dispatch),
});

export default withRouter(
  connect<{}, {}, ILoginPageProps>(null, mapDispatchToProps)(LoginPage)
);
