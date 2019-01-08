import React, { Component } from 'react';
import Input from '../../Presentational/Input';
import './form.scss';

class Form extends Component  {

  constructor(data) {
    super();

    this.state = Object.assign({}, data.data);

    this.handleChange      = this.handleChange.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleBlur        = this.handleBlur.bind(this);
    this.handleFocus       = this.handleFocus.bind(this);
    this.handleKeyPress    = this.handleKeyPress.bind(this);
    this.handleClear       = this.handleClear.bind(this);
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

  nextFocus($input) {
    let $form = $input.form,
        $nextInput,
        elementId;

    $nextInput = [...$form].forEach((item, id) => {
      if(item === $input) {
        elementId = id;
      }
    });

    $nextInput = $form.elements[elementId + 1];

    if($nextInput.value === "") {
      $nextInput.focus();
    } else {
      $input.blur();
    }

  }

  handleChange(event) {
    let id    = event.target.id,
        value = event.target.value,
        aux,
        item,
        newValues,
        $optionsItems = [...event.currentTarget.parentElement.querySelectorAll('.options-list__item')],
        $inputBox = event.currentTarget.parentElement;

    this.setState(this.changeValue(id, value));

    item = this.findItem(id);
    aux = value.toLowerCase();

    newValues = item.data.values.filter((val) => {
      return val.value.toLowerCase().search(aux) > -1;
    });

    $optionsItems.forEach((item) => {
      item.classList.remove('options-list__item--on');
      item.classList.add('options-list__item--off');
    });

    newValues.forEach((val) => {
      document.getElementById(val.key).classList.remove('options-list__item--off');
    });

    if(newValues.length > 0) {
      document.getElementById(newValues[0].key).classList.add('options-list__item--on');
    }

    if(value === "") {
      $inputBox.classList.remove('input-box--active');

      $optionsItems.forEach((item) => {
        item.classList.remove('options-list__item--on');
      });

    }
  }

  handleOptionClick(event) {
    let parent    = event.currentTarget.dataset.parent,
        value     = event.currentTarget.dataset.value,
        targetId  = event.currentTarget.id,
        $inputBox = event.currentTarget.parentElement.parentElement,
        item;

    this.changeValue(parent, value);
    item = this.findChild(parent, targetId);

    if(item.child !== null) {
      let $inputBox2 = document.getElementById(item.child.target).parentElement;

      this.changeValue(item.child.target, "");
      this.changeItem(item.child.target, item.child.values);
      $inputBox2.classList.remove('input-box--active');
    }

    $inputBox.classList.add('input-box--active');
  }

  handleBlur(event) {
    let $inputBox = event.currentTarget.parentElement;

    event.currentTarget.parentElement.classList.remove('input-box--on');

    if(event.currentTarget.value !== "") {
      $inputBox.classList.add('input-box--active');
    }
  }

  handleFocus(event) {
    event.currentTarget.parentElement.classList.add('input-box--on');
  }

  handleKeyPress(event) {
    if(event.which === 13) {
      if(event.currentTarget.value !== "") {

        let $firstOption = event.currentTarget.parentElement.querySelector('.options-list').querySelector('.options-list__item:not(.options-list__item--off)');

        if($firstOption !== null) {
          $firstOption.click();
          this.nextFocus(event.currentTarget);
        }
      }
    }
  }

  handleClear(event) {
    let $inputBox = event.currentTarget.parentElement,
        $input    = $inputBox.querySelector('.input-box__input'),
        id        = $input.id;

    $inputBox.classList.remove('input-box--active');
    this.changeValue(id, "");
    $input.focus();
  }

  render() {
    const { env } = this.state;
    const { inputs } = this.state;

    return (
      <form className="search__form">

        {inputs.map((item) =>
          <Input env={env} data={item.data} name={item.name} key={item.key} id={item.key} handleChange={this.handleChange} handleOptionClick={this.handleOptionClick} handleBlur={this.handleBlur} handleFocus={this.handleFocus} handleKeyPress={this.handleKeyPress} handleClear={this.handleClear} />
        )}

        <button className="search__button" type="button">Search</button>
      </form>
    );
  }
}

export default Form;
