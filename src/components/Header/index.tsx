import * as React from 'react';

export interface HeaderProps {
  title: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
