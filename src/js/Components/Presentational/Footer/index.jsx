import React, { Component } from 'react';
import Copyright from '../Copyright';
import FooterMenu from '../../Container/FooterMenu';
import './footer.scss';


class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <Copyright />
          <FooterMenu />
        </div>
      </footer>
    );
  }
}

export default Footer;
