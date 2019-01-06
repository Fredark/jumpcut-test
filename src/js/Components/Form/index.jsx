import React, { Component } from 'react';
import Input from '../Input';

class Form extends Component  {

  constructor(data) {
    super();

    this.state = Object.assign({}, data.data);

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
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
    this.changeValue(id, "");

    let item = this.findItem(id);
    item.data.values = value.slice();
  }

  handleChange(event) {

    let id    = event.target.id,
        value = event.target.value;

    this.setState(this.changeValue(id, value));
  }

  handleOptionClick(event) {

    let parent   = event.currentTarget.dataset.parent,
        value    = event.currentTarget.dataset.value,
        targetId = event.currentTarget.id,
        item;

    this.changeValue(parent, value);
    item = this.findChild(parent, targetId);

    if(item.child !== null) {
      this.changeItem(item.child.target, item.child.values);
    }
  }

  render() {
    const { env } = this.state;
    const { inputs } = this.state;

    return (
      <form className="search__form">

        {inputs.map((item) =>
          <Input env={env} data={item.data} key={item.key} id={item.key} handleChange={this.handleChange} handleOptionClick={this.handleOptionClick} />
        )}

        <button className="search__button" type="button">Search</button>
      </form>
    );
  }
}


export default Form;
