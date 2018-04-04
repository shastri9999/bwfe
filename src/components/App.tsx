import * as React from 'react';
import Header from './Header';
import Routes from '../routes';
import '../styles/normalize.css';

export default class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Header title="Hello World" />
        <Routes />
      </div>
    );
  }
}
