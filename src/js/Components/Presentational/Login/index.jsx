import React, { Component } from 'react';
import Icons from '../Icons';
import { user } from '../../../Data/user';
import './login.scss';

class Login extends Component {
  constructor() {
    super();

    this.state = user;
  }

  render() {
    const { user } = this.state;

    return (
      <div className="login">
        <span className="login__icon">
          {user.photo !== "" ? (
            <img src={user.photo} alt={user.name} />
          ) : (
            <Icons id="user" />
          )}
        </span>
        <span className="login__name">{user.name}</span>
      </div>
    );
  }
}

export default Login;
