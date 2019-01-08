import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons';

const User = ({id, photo, name, city, radius, status, tag, activities, youtube}) => (

  <li className="users-list__item" id={id} data-status={status}>
    <article className="users-list__article">
      <div className="users-list__avatar">
        <div className="users-list__clip">
          {(photo !== "")
            ? <img className="users-list__img" src={photo} alt={name} />
            : <span className="users-list__tag">{tag}</span>
          }
        </div>
      </div>
      <h1 className="users-list__name">
        {name}
      </h1>
      <span className="users-list__location">
        <span className="users-list__city">
          <Icons id="pin" />
          {city}
        </span>
        <span className="users-list__radius">
          {radius}
        </span>
      </span>
      <ul className="users-list__activities">
        {activities.map(item =>
          <li className="users-list__activity" key={item.key}>
            {item.name}
          </li>
        )}
      </ul>
      <div className="users-list__buttons">
        <a className="users-list__button users-list__youtube" rel="noopener noreferrer" target="_blank" href={youtube}>View Channel</a>
        <a className="users-list__button users-list__message" rel="noopener noreferrer" target="_blank" href="{youtube}">Send Message</a>
      </div>
    </article>
  </li>
);

User.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  radius: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  activities: PropTypes.array.isRequired,
  youtube: PropTypes.string.isRequired
};

export default User;
