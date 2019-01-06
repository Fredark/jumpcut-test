import React, { Component } from 'react';

class Menu extends Component {

  constructor() {
    super();

    this.state = {
      menu: [
        {
          id: 1,
          link: "#",
          title: "Community",
          active: false
        },
        {
          id: 2,
          link: "#",
          title: "My Courses",
          active: false
        },
        {
          id: 3,
          link: "#",
          title: "Video Review",
          active: false
        },
        {
          id: 4,
          link: "#",
          title: "Bootcamp",
          active: false
        },
        {
          id: 5,
          link: "#",
          title: "Collaborate",
          active: true
        }
      ]
    }
  }

  render() {
    const { menu } = this.state;

    return (
      <nav className="menu">
        <ul className="menu__list">
          {
            menu.map((item) =>
              <li key={item.id} className={"menu__item" + (item.active ? ' menu__item--active' : '')}>
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
