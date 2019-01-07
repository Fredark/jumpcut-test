import React, { Component } from 'react';
import Icons from '../Icons';
import Menu from '../Menu';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Login from '../Login';
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
          <ul className="user-list">
            <li className="user-list__item">
              <Notifications />
            </li>
            <li className="user-list__item">
              <Messages />
            </li>
            <li className="user-list__item">
              <Login />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
