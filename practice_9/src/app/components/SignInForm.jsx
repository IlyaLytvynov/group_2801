import React, { Component } from 'react';
import { InputField } from './InputField.jsx';
import { Ajax } from '../../../../common/scripts/Ajax.js';

const URL = 'https://bloggers-crm-fe-prod.herokuapp.com/api/signin';

export const getFullUrl = (newRoute) => {
  const currentUrl = window.location.href;
  const urlArray = currentUrl.split('/');
  urlArray.pop();
  const permanentUrl = urlArray.join('/');
  console.log(permanentUrl);
  return permanentUrl + newRoute;
};

export class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(eventObject) {
    eventObject.preventDefault();
    const request = new Ajax(URL);
    const succesHandler = (resp) => {
      console.log(resp);
      const token = JSON.parse(resp);
      console.log(token.data);
      window.localStorage.setItem('USER_TOKEN', JSON.stringify(token.data));
      const newUrl = getFullUrl('/../dashboard/dashboard.html');
      window.location.href = newUrl;
    };
    const errorHandler = (xhr) => {
      console.log('ERROR', xhr);
    };
    request.post(succesHandler, errorHandler, this.state);
  }

  emailChangeHandler(value) {
    this.setState({ email: value });
  }

  passwordChangeHandler(value) {
    this.setState({ password: value });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <InputField
          label='Email'
          type='text'
          onChange={this.emailChangeHandler}
        />
        <InputField
          label='Password'
          type='password'
          onChange={this.passwordChangeHandler}
        />
        <div>
          <button>Hello</button>
        </div>
      </form>
    );
  }
}
