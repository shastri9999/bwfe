import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { signOut as signOutAction } from '../actions';
import { ISignOutAction } from '../actions/ActionTypes';
import Routes from '../routes';
import { loginPath } from '../routes/paths';
import '../styles/normalize.css';
import { IStoreState, UserType } from '../types';

import Header from './Header';

export interface IAppProps extends RouteComponentProps<any> {
  authenticatedUser: UserType | null;
  signOut: () => ISignOutAction;
}

class App extends React.Component<IAppProps> {
  public render() {
    const { authenticatedUser } = this.props;
    return (
      <div className="main">
        <Header
          title="Hello World"
          signOut={this.signOut}
          authenticatedUser={authenticatedUser}
        />
        <div className="container">
          <Routes authenticatedUser={authenticatedUser} />
        </div>
      </div>
    );
  }

  private signOut = () => {
    this.props.history.push(loginPath);
    this.props.signOut();
  };
}

const mapStateToProps = (state: IStoreState) => ({
  authenticatedUser: state.authenticatedUser,
});

const mapDispatchToProps = (dispatch: Dispatch<IStoreState>) => ({
  signOut: bindActionCreators(signOutAction, dispatch),
});

export default withRouter(
  connect<{}, {}, IAppProps>(mapStateToProps, mapDispatchToProps)(App)
) as React.ComponentClass<{}>;
