import React, { Component } from 'react';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Login from '../Login';
import './top-list.scss';

class TopList extends Component {

  render() {
    return (
      <ul className="top-list">
        <li className="top-list__item">
          <Notifications />
        </li>
        <li className="top-list__item">
          <Messages />
        </li>
        <li className="top-list__item">
          <Login />
        </li>
      </ul>
    );
  }
}

export default TopList;
