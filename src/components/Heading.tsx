import * as React from 'react';

export interface HeadingProps {
  title: string;
}

export default class Heading extends React.Component<HeadingProps> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
