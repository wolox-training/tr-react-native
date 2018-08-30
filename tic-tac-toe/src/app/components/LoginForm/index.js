import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, minLength, maxLength, asyncValidate } from '~utils/validation';

import { customInput } from './fields';

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, minLength, maxLength]}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'register',
  asyncValidate,
  asyncBlurFields: ['username']
})(LoginForm);

export default LoginForm;
