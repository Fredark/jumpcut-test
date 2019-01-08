import React, { Component } from 'react';
import TopList from '../../Presentational/TopList';
import { dataMenu } from '../../../Data/menu';
import './menu.scss';

class Menu extends Component {

  constructor() {
    super();

    this.state = Object.assign({}, dataMenu);

    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle(event) {
    let $menu = event.currentTarget.parentElement;
    $menu.classList.toggle('menu--on');
    document.body.classList.toggle('menu--on');
  }

  render() {
    const { menu } = this.state;

    return (
      <div className="menu">
        <span className="menu__toggle" onClick={this.handleToggle}>
          <span className="menu__icon"></span>
        </span>

        <div className="menu__env">
          <nav className="menu__nav">
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
          <TopList />
        </div>
      </div>

    );
  }
}

export default Menu;
