import React, { Component } from 'react';
import banner from '../../../../assets/banner.mp4';
import Form from '../Form';
import { dataSearch } from '../../../Data/search'
import './search.scss';


class Search extends Component {

  constructor() {
    super();

    this.state = Object.assign({
      video: banner
    }, dataSearch);
  }

  render() {
    const { video } = this.state;
    const { search } = this.state;

    return (
      <section className="search">
        <div className="search__video-mask">
          <video className="search__video" loop autoPlay muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="container search__container">
          <h1 className="search__title">Sed augue ipsum egestas</h1>
          <p className="search__subtitle">
            Curabitur nisi. Vivamus consectetuer hendrerit.
          </p>
          <Form data={search} />
        </div>
      </section>
    );
  }
}

export default Search;
