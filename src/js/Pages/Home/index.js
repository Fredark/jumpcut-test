import React, { Component } from 'react';
import '../../../style/style.scss';
import Header from '../../Components/Header';
import Search from '../../Components/Search';
import './Home.scss';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Search />
      </div>
    );
  }
}

export default Home;
