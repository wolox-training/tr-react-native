import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import { required, minLength, asyncValidate, isValidMail } from '~utils/validation';

import { customInput } from './fields';

const userValidations = [required, isValidMail];
const passValidations = [required, minLength];
class LoginForm extends Component {
  submit = values => {
    window.alert(JSON.stringify(values));
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={userValidations}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={passValidations}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}


LoginForm = reduxForm({
  form: 'register',
  validations: [userValidations,passValidations],
  asyncBlurFields: ['username']
})(LoginForm);

export default LoginForm;
