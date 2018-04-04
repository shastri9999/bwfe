import * as React from 'react';
import * as Images from '../../images';

export interface IHeaderProps {
  title: string;
}

export default class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header>
        <img src={Images.Logo} alt="Todo Manager" className="logo" />
        <div className="title">Todo Manager</div>
      </header>
    );
  }
}
