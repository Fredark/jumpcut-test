import React, { Component } from 'react';
import '../../../style/style.scss';
import Header from '../../Components/Presentational/Header';
import Search from '../../Components/Container/Search';
import Map from '../../Components/Presentational/Map';
import UsersList from '../../Components/Container/UsersList';
import Footer from '../../Components/Presentational/Footer';
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
