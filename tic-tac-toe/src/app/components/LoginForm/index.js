import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError, Form } from 'redux-form';
import { Link } from 'react-router-dom';

import { required, minLength, isValidMail } from '~utils/validation';

import { customInput } from './fields';

const userValidations = [required, isValidMail];
const passValidations = [required, minLength];

function LoginForm(props) {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}

LoginForm = reduxForm({
  form: 'register',
  validations: [userValidations,passValidations]
})(LoginForm);

export default LoginForm;
