import * as React from 'react';
import Routes from '../routes';
import '../styles/normalize.css';
import { UserType } from '../types';
import Header from './Header';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="main">
        <Header title="Hello World" />
        <div className="container">
          <Routes authenticatedUser={UserType.Employee} />
        </div>
      </div>
    );
  }
}
