import React, { Component } from 'react';
import Input from '../Input';
import './form.scss';

class Form extends Component  {

  constructor(data) {
    super();

    this.state = Object.assign({}, data.data);

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  findItem(id) {
    let item = Object.assign({}, this.state.inputs.filter((item) => {
      return item.key === id;
    }));

    return item[0];
  }

  findChild(id, children) {
    let item = this.findItem(id);

    let child = Object.assign({}, item.data.values.filter((child) => {
      return child.key === children;
    }));

    return child[0];
  }

  changeValue(id, value) {

    let item = this.findItem(id);
    item.data.value = value;

    let newState = Object.assign({}, {
        inputs: item
      },
      this.state
    );

    this.setState(newState);
  }

  changeItem(id, value) {
    let item = this.findItem(id);
    item.data.values = value.slice();
  }

  handleChange(event) {

    let id    = event.target.id,
        value = event.target.value,
        aux,
        item,
        newValues;

    this.setState(this.changeValue(id, value));

    item = this.findItem(id);
    aux = value.toLowerCase();

    newValues = item.data.values.filter((val) => {
      return val.value.toLowerCase().search(aux) > -1;
    });

    [...event.currentTarget.parentElement.querySelectorAll('.options-list__item')].forEach((item) => {
      item.classList.add('options-list__item--off');
    });

    newValues.forEach((val) => {
      document.getElementById(val.key).classList.remove('options-list__item--off');
    });

  }

  handleOptionClick(event) {

    let parent   = event.currentTarget.dataset.parent,
        value    = event.currentTarget.dataset.value,
        targetId = event.currentTarget.id,
        item;

    this.changeValue(parent, value);
    item = this.findChild(parent, targetId);

    if(item.child !== null) {
      this.changeValue(item.child.target, "");
      this.changeItem(item.child.target, item.child.values);
    }
  }

  handleBlur(event) {
    event.currentTarget.parentElement.classList.remove('input-box--on');
  }

  handleFocus(event) {
    event.currentTarget.parentElement.classList.add('input-box--on');
  }

  render() {
    const { env } = this.state;
    const { inputs } = this.state;

    return (
      <form className="search__form">

        {inputs.map((item) =>
          <Input env={env} data={item.data} name={item.name} key={item.key} id={item.key} handleChange={this.handleChange} handleOptionClick={this.handleOptionClick} handleBlur={this.handleBlur} handleFocus={this.handleFocus} />
        )}

        <button className="search__button" type="button">Search</button>
      </form>
    );
  }
}

export default Form;
