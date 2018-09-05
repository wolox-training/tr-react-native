import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import actionCreators from '~redux/login/actions';

import LoginForm from '../LoginForm';

function FormContainer({ isValidUser, handleSubmit }) {
  return isValidUser === true ? <Redirect replace to="/game" /> : <LoginForm onSubmit={handleSubmit} />;
}

FormContainer.propTypes = {
  handleSubmit: PropTypes.func,
  isValidUser: PropTypes.bool
};
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => {
    dispatch(actionCreators.asyncRequest(values));
  }
});

const mapStateToProps = state => ({
  isValidUser: state.login.isValidUser,
  loading: state.login.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
