import React, { Component } from 'react';
import './map.scss';

class Map extends Component {

  render() {
    return (
      <section className="map">
        <div className="container map__container">
          <div className="map__title">
            <div className="map__info">
              <h2 className="map__subtitle">
                16 vloggers near Palau Ujong
              </h2>
              <ul className="selected-list">
                <li className="selected-list__item">
                  Palau Ujong, Singapore
                </li>
                <li className="selected-list__item">
                  10 miles radius
                </li>
                <li className="selected-list__item">
                  Vlog
                </li>
              </ul>
            </div>
            <button className="map__button" type="button">Advanced Search</button>
          </div>
          <div className="map__map" id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.44333751354!2d-118.69261204759972!3d34.02072893630757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+EUA!5e0!3m2!1spt-BR!2sbr!4v1546927044292" width="600" height="450" frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
