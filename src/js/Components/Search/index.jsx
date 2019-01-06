import React, { Component } from 'react';
import banner from '../../../assets/banner.mp4';


class Search extends Component {

  constructor() {
    super();

    this.state = {
      video: banner
    }
  }

  render() {
    const { video } = this.state;

    return (
      <section className="search">
        <video id="background-video" loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
        <div className="container search__container">

        </div>
      </section>
    );
  }
}

export default Search;
