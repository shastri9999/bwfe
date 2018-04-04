import * as React from 'react';
import Header from './Header';
import Routes from '../routes';
import '../styles/normalize.css';
import { UserType } from '../types';

export default class App extends React.Component<{}> {
  render() {
    return (
      <div className="main">
        <Header title="Hello World" />
        <div className="container">
          <Routes authenticatedUser={null} />
        </div>
      </div>
    );
  }
}
