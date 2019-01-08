import React, { Component } from 'react';
import Icons from '../Icons';
import Menu from '../../Container/Menu';
import './header.scss';


class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <a className="header__logo" href="/">
            <Icons id="logo" />
          </a>
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
