import React from 'react';
import { ID } from '../utils/random';
import './InputField.scss';
// PROPS properties data function
export class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.id = ID();
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    const value = e.currentTarget.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <label className='input-field' htmlFor={this.id}>
        <span>{this.props.label}</span>
        <input
          className='input-field__input'
          type={this.props.type}
          onChange={this.changeHandler}
          id={this.id}
          placeholder='Enter name'
        />
      </label>
    );
  }
}
