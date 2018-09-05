import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, isValidMail } from '~utils/validation';

import strings from '~utils/strings';

import CustomInput from './fields';

const userValidations = [required, isValidMail];
const passValidations = [required, minLength];

function LoginForm({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name={strings.fields.USERNAME}
        component={CustomInput}
        type="text"
        label="Username"
        validate={userValidations}
      />
      <Field
        name={strings.fields.PASSWORD}
        component={CustomInput}
        type="password"
        label="Password"
        validate={passValidations}
      />
      <button type={strings.SUBMIT}>Submit</button>
    </Form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

LoginForm = reduxForm({
  form: strings.form.FORM_ID,
  validations: [userValidations, passValidations]
})(LoginForm);

export default LoginForm;
