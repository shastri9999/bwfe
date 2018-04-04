import * as React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={todosPath} className="home">
          <img src={Images.Logo} alt={this.props.title} className="logo" />
          <div className="title">{this.props.title}</div>
        </Link>
        <div className="right">
          {authenticatedUser === UserType.Manager ? (
            <React.Fragment>
              <Link to={createPath} className="nav-link">
                Create
              </Link>
              <Link to={editPath} className="nav-link">
                Edit
              </Link>
            </React.Fragment>
          ) : null}
          {authenticatedUser !== null ? (
            <div className="avatar">
              <div className="info">Logged in as {authenticatedUser}</div>
              <Button onClick={this.props.signOut} className="small">
                Logout
              </Button>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}
