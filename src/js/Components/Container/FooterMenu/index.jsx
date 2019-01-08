import React, { Component } from 'react';
import { dataFooterMenu } from '../../../Data/footer-menu';
import './footer-menu.scss';

class FooterMenu extends Component {

  constructor() {
    super();

    this.state = Object.assign({}, dataFooterMenu);

  }

  render() {
    const { menu } = this.state;

    return (
      <nav className="footer-menu">
        <ul className="footer-menu__list">
          {
            menu.map((item) =>
              <li key={item.key} className="footer-menu__item">
                <a className="footer-menu__link" href={item.link} title={item.title}>{item.title}</a>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
}

export default FooterMenu;
