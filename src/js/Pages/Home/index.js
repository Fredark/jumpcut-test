import React, { Component } from 'react';
import '../../../style/style.scss';
import Header from '../../Components/Presentational/Header';
import Search from '../../Components/Container/Search';
import Map from '../../Components/Presentational/Map';
import UsersList from '../../Components/Container/UsersList';
import Footer from '../../Components/Presentational/Footer';
import Mask from '../../Components/Presentational/Mask';
import './Home.scss';


class Home extends Component {

  componentDidMount() {

    window.addEventListener('load', (event) => {
      document.body.classList.add('page--loaded');
      document.querySelector('.header').classList.add('section--active');
      document.querySelector('.search').classList.add('section--active');
    });

    window.addEventListener('scroll', this.handleScroll);

  }

  handleScroll(event) {
    let $home        = document.querySelector('.home'),
        $header      = document.querySelector('.header'),
        windowHeight = window.outerHeight,
        scrollY      = window.scrollY;

    [...$home.children].forEach((item) => {
      if(!item.classList.contains('section--active')) {

        if(scrollY + 150 >= item.offsetTop - (windowHeight / 2)) {
          item.classList.add('section--active');
        }
      }

    });

    if(scrollY >= 100) {
      $header.classList.add('header--active');
    } else {
      $header.classList.remove('header--active');
    }
  }

  render() {
    return (
      <div className="home">
        <Header />
        <Search />
        <Map />
        <UsersList />
        <Footer />
        <Mask />
      </div>
    );
  }
}

export default Home;
