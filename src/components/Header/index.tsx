import * as React from 'react';

export interface IHeaderProps {
  title: string;
}

export default class Header extends React.Component<IHeaderProps> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
