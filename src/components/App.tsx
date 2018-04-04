import * as React from 'react';
import Header from './Header';
import Routes from '../routes';
import '../styles/normalize.css';

export default class App extends React.Component<{}> {
  render() {
    return (
      <div className="main">
        <Header title="Hello World" />
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}
