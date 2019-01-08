import React, { Component } from 'react';
import Icons from '../Icons';
import './pagination.scss';

class Pagination extends Component {

  render() {
    return (
      <ul className="pagination">
        <li className="pagination__item">
          <Icons id="left-arrow" />
        </li>
        <li className="pagination__item pagination__item--on">
          <span className="pagination__number">
            1
          </span>
        </li>
        <li className="pagination__item">
          <span className="pagination__number">
            2
          </span>
        </li>
        <li className="pagination__item">
          <span className="pagination__number">
            3
          </span>
        </li>
        <li className="pagination__item">
          <Icons id="right-arrow" />
        </li>
      </ul>
    );
  }
}

export default Pagination;
