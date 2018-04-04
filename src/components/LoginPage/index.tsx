import * as React from 'react';
import { UserType } from '../../types';
import Button from '../Button';

export default class LoginPage extends React.Component<{}> {
  public onLogin = (role: UserType) => {
    /* ignore */
  };

  public onManagerLogin = () => {
    this.onLogin(UserType.Manager);
  };

  public onEmployeeLogin = () => {
    this.onLogin(UserType.Employee);
  };

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
}
