import React, { Component } from 'react';
import { dataMenu } from '../../Data/menu';

class Menu extends Component {

  constructor() {
    super();

    this.state = Object.assign({}, dataMenu);

  }

  render() {
    const { menu } = this.state;

    return (
      <nav className="menu">
        <ul className="menu__list">
          {
            menu.map((item) =>
              <li key={item.key} className={"menu__item" + (item.active ? ' menu__item--active' : '')}>
                <a className="menu__link" href={item.link} title={item.title}>{item.title}</a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;
