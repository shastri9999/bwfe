import * as React from 'react';
import { UserType } from '../../types';
import Button from '../Button';

export default class LoginPage extends React.Component<{}> {
  onLogin = (role: UserType) => {
    console.log(role);
  };

  onManagerLogin = () => {
    this.onLogin(UserType.Manager);
  };

  onEmployeeLogin = () => {
    this.onLogin(UserType.Employee);
  };

  render() {
    return (
      <div className="login">
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
