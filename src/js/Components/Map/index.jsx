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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4456190856604!2d-118.3231414850668!3d34.083723023518424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8b66e7c9b4b%3A0xbb3fe227c7676482!2sParamount+Pictures+Studio+Tour!5e0!3m2!1spt-BR!2sbr!4v1546804385060" width="600" height="450" frameBorder="0" title="map"></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
