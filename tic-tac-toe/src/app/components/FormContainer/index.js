import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import actionCreators from '~redux/login/actions';

import strings from '~utils/strings';

import LoginForm from '../LoginForm';

function FormContainer({ isValidUser, handleSubmit }) {
  return isValidUser ? <Redirect replace to={strings.paths.GAME} /> : <LoginForm onSubmit={handleSubmit} />;
}

FormContainer.propTypes = {
  handleSubmit: PropTypes.func,
  isValidUser: PropTypes.bool
};

const mapStateToProps = state => ({
  isValidUser: state.login.isValidUser,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(actionCreators.asyncRequest(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
