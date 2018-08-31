import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '~redux/login/actions';

import LoginForm from '../LoginForm';

function FormContainer({ handleSubmit }) {
  return <LoginForm onSubmit={handleSubmit} />;
}

FormContainer.propTypes = {
  handleSubmit: PropTypes.func
};
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => {
    dispatch(actionCreators.asyncRequest(values));
  }
});

const mapStateToProps = state => ({
  isValidUser: state.reducer.isValidUser,
  loading: state.reducer.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
