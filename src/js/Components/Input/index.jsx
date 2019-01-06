import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../Icons';

const Input = ({env, data, id, handleChange, handleOptionClick}) => (
  <div className={env + "__input-box input-box"}>
    <Icons className={env + "__input-icon input-box__icon"} id={data.icon} />

    <input
      className={env + "__input input-box__input"}
      type={data.type}
      value={data.value}
      id={id}
      onChange={handleChange}
      required={data.required}
    />

    <ul className={env + "__options-list options-list"}>
      {data.values.map((item) =>

        <li key={item.key} id={item.key} className={env + "__options-item options-list__item"} data-parent={id} data-value={item.value} onClick={handleOptionClick}>
          <span className={env + "__options-value options-list__value"}>
            {item.value}
          </span>
        </li>
      )}
    </ul>
  </div>
);

Input.propTypes = {
  env: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOptionClick: PropTypes.func.isRequired
};

export default Input;
