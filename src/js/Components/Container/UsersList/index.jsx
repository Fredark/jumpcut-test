import React, { Component } from 'react';
import User from '../../Presentational/User';
import Pagination from '../../Presentational/Pagination';
import { dataUsers } from '../../../Data/users';
import './users-list.scss';

class UsersList extends Component {

  constructor() {
    super();

    this.state = Object.assign({}, dataUsers);

  }

  render() {
    const { users } = this.state;

    return (
      <section className="users">
        <div className="container users__container">
          <span className="users__amount">
          Viewing <span className="users__number">16</span> of <span className="users__number">40</span> results.
          </span>
          <ul className="users-list">
            {users.map(user =>
              <User
                key={user.key}
                id={user.key}
                photo={user.photo}
                name={user.name}
                city={user.city}
                radius={user.radius}
                status={user.status}
                activities={user.activities}
                youtube={user.youtube}
                tag={user.name[0] + user.name.split(" ")[1][0]}
              />
            )}
          </ul>
          <div className="users__bottom">
            <Pagination />
          </div>
        </div>
      </section>
    );
  }
}

export default UsersList;
