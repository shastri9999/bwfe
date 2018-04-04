import * as React from 'react';
import * as Images from '../../images';

export interface IHeaderProps {
  readonly title: string;
}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <header>
        <img src={Images.Logo} alt={this.props.title} className="logo" />
        <div className="title">{this.props.title}</div>
      </header>
    );
  }
}
