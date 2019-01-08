import React from 'react';

const Icons = (props) => (
  <svg className={`icon icon--${props.id}`}>
    <use xlinkHref={`#icon--${props.id}`} />
  </svg>
);

export default Icons;
