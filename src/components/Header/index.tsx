import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as Images from '../../images';
import { createPath, editPath, todosPath } from '../../routes/paths';
import { UserType } from '../../types';
import Button from '../Button';

export interface IHeaderProps {
  readonly title: string;
  readonly authenticatedUser: UserType | null;
  signOut: () => void;
}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    const { authenticatedUser } = this.props;
    return (
      <header>
        <NavLink to={todosPath} className="home" activeClassName="active">
          <img src={Images.Logo} alt={this.props.title} className="logo" />
          <div className="title">{this.props.title}</div>
        </NavLink>
        <div className="right">
          {authenticatedUser !== null ? (
            <div className="avatar">
              <div className="info">Logged in as {authenticatedUser}</div>
              <Button onClick={this.props.signOut} className="small primary">
                Logout
              </Button>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}
