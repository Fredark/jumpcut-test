import React, { Component } from 'react';
import '../../../style/style.scss';
import Header from '../../Components/Header';
import Search from '../../Components/Search';
import Map from '../../Components/Map';
import UsersList from '../../Components/UsersList';
import Footer from '../../Components/Footer';
import './Home.scss';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Search />
        <Map />
        <UsersList />
        <Footer />
      </div>
    );
  }
}

export default Home;
